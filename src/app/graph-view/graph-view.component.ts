import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';

import { EquationsService } from '../equations.service';
import { ExecEquationService } from '../exec-equation.service';
import { ViewportService } from '../viewport.service';

type Ctx = CanvasRenderingContext2D;

const EPSILON = 0.000001;

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.styl'],
})
export class GraphViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  ctxCache: Ctx | null = null;
  subCache: Subscription | null = null;
  animationFrameCache: number | null = null;

  get ctx(): Ctx {
    if (this.ctxCache?.canvas !== this.canvas?.nativeElement) {
      this.ctxCache = this.canvas.nativeElement.getContext('2d');
    }
    return this.ctxCache;
  }

  constructor(
    private equations: EquationsService,
    private execEquation: ExecEquationService,
    private viewport: ViewportService,
    private host: ElementRef,
  ) { }

  ngOnInit() {
    const resize = fromEvent(window, 'resize');
    const updates = merge(this.equations.updates, resize);
    this.subCache = updates.subscribe({ next: () => this.render() });
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

  @HostListener('mousewheel', ['$event', '$event.target'])
  onScroll(event: WheelEvent, target: HTMLElement) {
    event.preventDefault();
    this.viewport.zoomAt(
      event.deltaY,
      [
        event.clientX - target.offsetLeft,
        event.clientY - target.offsetTop,
      ],
      [target.clientWidth, target.clientHeight],
    );
    this.render();
  }

  render() {
    if (this.animationFrameCache === null) {
      this.animationFrameCache = requestAnimationFrame(() => {
        this.animationFrameCache = null;
        this.renderGraphs();
      });
    }
  }

  renderGraphs() {
    const ctx = this.ctx;
    const host = this.host?.nativeElement;
    if (!ctx || !host) { return; }
    const width = ctx.canvas.width = host.clientWidth;
    const height = ctx.canvas.height = host.clientHeight - 5;

    this.viewport.updateViewMatrix([width, height]);

    ctx.clearRect(0, 0, width, height);

    this.renderAxes(ctx);
    this.renderEquations(ctx);
  }

  renderEquations(ctx: Ctx) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';

    const width = this.viewport.viewportDimensions[0];

    for (const equation of this.equations.equations) {
      ctx.beginPath();
      for (let sx = 0; sx < width; sx += 5) {
        const x = this.viewport.screenToEqX(sx);

        const { y } = this.execEquation.execEquation(equation, { x });

        const sy = this.viewport.eqToScreenY(y);
        ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }
  }

  renderAxes(ctx: Ctx) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.font = '12pt sans-serif';

    const [minX, minY, maxX, maxY] = this.viewport.getBounds();

    const incApprox = Math.abs(maxX - minX) / 7;
    const incMagnitude = Math.round(Math.log10(incApprox));
    const inc = Math.pow(10, incMagnitude);

    // Draw all of the lines first
    ctx.beginPath();

    ctx.moveTo(...this.viewport.screenCoords([minX, 0]));
    ctx.lineTo(...this.viewport.screenCoords([maxX, 0]));
    for (let x = Math.floor(minX / inc) * inc; x <= maxX; x += inc) {
      const [sx, sy] = this.viewport.screenCoords([x, 0]);
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx, sy + 10);
    }

    ctx.moveTo(...this.viewport.screenCoords([0, minY]));
    ctx.lineTo(...this.viewport.screenCoords([0, maxY]));
    for (let y = Math.floor(minY / inc) * inc; y <= maxY; y += inc) {
      const [sx, sy] = this.viewport.screenCoords([0, y]);
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx - 10, sy);
    }

    ctx.stroke();

    // Then the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = Math.floor(minX / inc) * inc; x <= maxX; x += inc) {
      if (Math.abs(x) > EPSILON) {
        const [sx, sy] = this.viewport.screenCoords([x, 0]);
        ctx.fillText(formatLabel(x, incMagnitude), sx, sy + 15);
      }
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = Math.floor(minY / inc) * inc; y <= maxY; y += inc) {
      if (Math.abs(y) > EPSILON) {
        const [sx, sy] = this.viewport.screenCoords([0, y]);
        ctx.fillText(formatLabel(y, incMagnitude), sx - 15, sy);
      }
    }
  }

}

export function formatLabel(x: number, magnitude: number) {
  return x.toFixed(Math.max(0, -magnitude));
}
