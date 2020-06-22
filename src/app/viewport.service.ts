import { Injectable } from '@angular/core';
import { mat2d, ReadonlyVec2, vec2 } from 'gl-matrix';

export const intitalScale = 1 / 5;
export const zoomSensitivity = 1 / 100;

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
  readonly tmpVec = vec2.create();

  constructor() {
    this.updateMatrices();
  }

  updateMatrices() {
    mat2d.invert(this.inverseMatrix, this.matrix);
  }

  zoom(amount: number) {
    const scaleBy = Math.pow(2, amount * zoomSensitivity);
    mat2d.scale(this.matrix, this.matrix, [scaleBy, scaleBy]);

    this.updateMatrices();
  }

  updateViewMatrix(viewportDimensions: ReadonlyVec2) {
    const scale = Math.min(viewportDimensions[0], viewportDimensions[1]) / 2;
    const center = vec2.clone(viewportDimensions);
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
}
