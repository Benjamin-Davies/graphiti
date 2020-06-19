import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, merge, fromEvent } from 'rxjs';

import { ExecEquationService } from '../exec-equation.service';
import { EquationsService } from '../equations.service';

type Ctx = CanvasRenderingContext2D;

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.styl']
})
export class GraphViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  ctxCache: Ctx | null = null;
  get ctx(): Ctx {
    if (this.ctxCache?.canvas !== this.canvas?.nativeElement) {
      this.ctxCache = this.canvas.nativeElement.getContext('2d');
    }
    return this.ctxCache;
  }

  constructor(private equations: EquationsService, private execEquation: ExecEquationService, private host: ElementRef) { }

  subCache: Subscription | null = null;
  ngOnInit() {
    const resize = fromEvent(window, 'resize');
    const updates = merge(this.equations.updates, resize);
    this.subCache = updates.subscribe({ next: () => this.render() })
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    if (this.subCache) {
      this.subCache.unsubscribe();
      this.subCache = null;
    }
  }

  render() {
    const ctx = this.ctx;
    const host = this.host?.nativeElement;
    if (!ctx || !host) return;
    const width = ctx.canvas.width = host.clientWidth;
    const height = ctx.canvas.height = host.clientHeight - 5;

    ctx.clearRect(0, 0, width, height);

    this.renderAxes(ctx, width, height);
    this.renderEquations(ctx, width, height);
  }

  renderEquations(ctx: Ctx, width: number, height: number) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';

    for (const equation of this.equations.equations) {
      ctx.beginPath();
      for (let sx = 0; sx < width; sx += 5) {
        const x = 6 * (sx / width) - 3;
        const { y } = this.execEquation.execEquation(equation, { x });
        const sy = (-y / 6 + 0.5) * height;
        ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }
  }

  renderAxes(ctx: Ctx, width: number, height: number) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.font = '12pt sans-serif';

    // Draw all of the lines first
    ctx.beginPath();

    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    for (let x = -3; x <= 3; x++) {
      ctx.moveTo((x / 6 + 0.5) * width, height / 2);
      ctx.lineTo((x / 6 + 0.5) * width, height / 2 + 10);
    }

    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    for (let y = -3; y <= 3; y++) {
      ctx.moveTo(width / 2     , (-y / 6 + 0.5) * height);
      ctx.lineTo(width / 2 - 10, (-y / 6 + 0.5) * height);
    }

    ctx.stroke();

    // Then the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = -3; x <= 3; x++) {
      if (x !== 0) {
        ctx.fillText(x.toString(), (x / 6 + 0.5) * width, height / 2 + 15);
      }
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = -3; y <= 3; y++) {
      if (y !== 0) {
        ctx.fillText(y.toString(), width / 2 - 15, (y / 6 + 0.5) * height);
      }
    }
  }

}
