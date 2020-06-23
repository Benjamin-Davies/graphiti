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
    vec2.copy(this.tmpVec, amount);
    vec2.transformMat2(this.tmpVec, this.tmpVec, this.inverseViewMatrix as mat2);

    const translation = mat2d.fromTranslation(this.tmpMat, this.tmpVec);
    mat2d.multiply(this.matrix, this.matrix, translation);

    this.updateMatrices();
  }

  zoomAt(amount: number, cursor: ReadonlyVec2, viewportDimensions: ReadonlyVec2) {
    this.updateViewMatrix(viewportDimensions);

    vec2.copy(this.tmpVec, cursor);
    vec2.transformMat2d(this.tmpVec, this.tmpVec, this.inverseViewMatrix);

    mat2d.translate(this.matrix, this.matrix, this.tmpVec);

    const scaleBy = Math.pow(2, amount * zoomSensitivity);
    mat2d.scale(this.matrix, this.matrix, [scaleBy, scaleBy]);

    vec2.scale(this.tmpVec, this.tmpVec, -1);
    mat2d.translate(this.matrix, this.matrix, this.tmpVec);

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
    this.tmpVec[0] = sx;
    vec2.transformMat2d(this.tmpVec, this.tmpVec, this.inverseViewMatrix);
    return this.tmpVec[0];
  }

  eqToScreenY(y: number): number {
    this.tmpVec[1] = y;
    vec2.transformMat2d(this.tmpVec, this.tmpVec, this.viewMatrix);
    return this.tmpVec[1];
  }

  screenCoords(v: ReadonlyVec2): [number, number] {
    vec2.transformMat2d(this.tmpVec, v, this.viewMatrix);
    return Array.from(this.tmpVec) as [number, number];
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
