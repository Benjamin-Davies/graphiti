import { Injectable } from '@angular/core';
import { mat2d, ReadonlyVec2, vec2, mat2 } from 'gl-matrix';

export const intitalScale = 1 / 5;
export const zoomSensitivity = 1 / 100;
export const minSize = 1 / 1000;

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  // Will never rotate, but in most cases it shouldn't matter
  readonly matrix = mat2d.fromScaling(
    mat2d.create(),
    [intitalScale, -intitalScale],
  );
  readonly inverseMatrix = mat2d.create();
  readonly viewMatrix = mat2d.create();
  readonly inverseViewMatrix = mat2d.create();
  readonly viewportDimensions = vec2.create();

  readonly tmpVec = vec2.create();
  readonly tmpMat = mat2d.create();

  constructor() {
    this.updateMatrices();
  }

  updateMatrices() {
    const determinant = Math.abs(mat2d.determinant(this.matrix));
    if (determinant < minSize * minSize) {
      const scale = Math.sqrt(minSize * minSize / determinant);
      mat2d.scale(this.matrix, this.matrix, [scale, scale]);
    }

    mat2d.invert(this.inverseMatrix, this.matrix);
  }

  pan(amount: ReadonlyVec2) {
    const v = vec2.copy(this.tmpVec, amount);
    vec2.transformMat2(v, v, this.inverseViewMatrix as mat2);

    const translation = mat2d.fromTranslation(this.tmpMat, v);
    mat2d.multiply(this.matrix, this.matrix, translation);

    this.updateMatrices();
  }

  zoomAt(amount: number, cursor: ReadonlyVec2, viewportDimensions: ReadonlyVec2) {
    this.updateViewMatrix(viewportDimensions);

    const v = vec2.copy(this.tmpVec, cursor);
    vec2.transformMat2d(v, v, this.inverseViewMatrix);

    mat2d.translate(this.matrix, this.matrix, v);

    const scaleBy = Math.pow(2, amount * zoomSensitivity);
    mat2d.scale(this.matrix, this.matrix, [scaleBy, scaleBy]);

    vec2.scale(v, v, -1);
    mat2d.translate(this.matrix, this.matrix, v);

    this.updateMatrices();
  }

  updateViewMatrix(viewportDimensions: ReadonlyVec2) {
    vec2.copy(this.viewportDimensions, viewportDimensions);

    const scale = Math.min(this.viewportDimensions[0], this.viewportDimensions[1]) / 2;
    const center = vec2.clone(this.viewportDimensions);
    vec2.scale(center, center, 0.5);

    const view = this.viewMatrix;
    mat2d.fromTranslation(view, center);
    mat2d.scale(view, view, [scale, scale]);

    mat2d.multiply(view, view, this.matrix);
    mat2d.invert(this.inverseViewMatrix, this.viewMatrix);
    return view;
  }

  screenToEqX(sx: number): number {
    const v = vec2.set(this.tmpVec, sx, 0);
    vec2.transformMat2d(v, v, this.inverseViewMatrix);
    return v[0];
  }

  eqToScreenY(y: number): number {
    const v = vec2.set(this.tmpVec, 0, y)
    vec2.transformMat2d(v, v, this.viewMatrix);
    return v[1];
  }

  screenCoords(v: ReadonlyVec2): [number, number] {
    const res = vec2.transformMat2d(this.tmpVec, v, this.viewMatrix);
    return Array.from(res) as [number, number];
  }

  getBounds() {
    const min = vec2.create();
    vec2.transformMat2d(min, min, this.inverseViewMatrix);
    const max = vec2.clone(this.viewportDimensions);
    vec2.transformMat2d(max, max, this.inverseViewMatrix);
    // Flip y because canvas uses +y down
    return [min[0], max[1], max[0], min[1]];
  }
}
