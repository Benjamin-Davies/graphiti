import { Injectable } from '@angular/core';
import { mat2d, ReadonlyVec2, vec2 } from 'gl-matrix';

export const intitalScale = 1 / 5;
export const zoomSensitivity = 1 / 100;

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  readonly matrix = mat2d.fromScaling(
    mat2d.create(),
    [intitalScale, -intitalScale],
  );
  readonly inverseMatrix = mat2d.create();

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

  // TODO: will be redundat once all vector logic is in here
  createViewMatrix(viewportDimensions: ReadonlyVec2) {
    const scale = Math.min(viewportDimensions[0], viewportDimensions[1]) / 2;
    const center = vec2.clone(viewportDimensions);
    vec2.scale(center, center, 0.5);

    const view = mat2d.fromTranslation(mat2d.create(), center);
    mat2d.scale(view, view, [scale, scale]);

    mat2d.multiply(view, view, this.matrix);
    return view;
  }
}
