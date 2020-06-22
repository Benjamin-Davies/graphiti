import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';

import { EquationsService } from '../equations.service';
import { ExecEquationService } from '../exec-equation.service';
import { ViewportService } from '../viewport.service';

type Ctx = CanvasRenderingContext2D;

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

  @HostListener('mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    event.preventDefault();
    this.viewport.zoom(event.deltaY);
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

    this.renderAxes(ctx, width, height);
    this.renderEquations(ctx, width, height);
  }

  renderEquations(ctx: Ctx, width: number, _: number) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';

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

  renderAxes(ctx: Ctx, width: number, height: number) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.font = '12pt sans-serif';

    const [minX, minY, maxX, maxY] = this.viewport.getBounds();

    // Draw all of the lines first
    ctx.beginPath();

    ctx.moveTo(...this.viewport.screenCoords([minX, 0]));
    ctx.lineTo(...this.viewport.screenCoords([maxX, 0]));
    for (let x = Math.ceil(minX); x <= maxX; x += 1) {
      const [sx, sy] = this.viewport.screenCoords([x, 0]);
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx, sy + 10);
    }

    ctx.moveTo(...this.viewport.screenCoords([0, minY]));
    ctx.lineTo(...this.viewport.screenCoords([0, maxY]));
    for (let y = Math.ceil(minY); y <= maxY; y += 1) {
      const [sx, sy] = this.viewport.screenCoords([0, y]);
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx - 10, sy);
    }

    ctx.stroke();

    // Then the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = Math.ceil(minX); x <= maxX; x += 1) {
      if (x !== 0) {
        const [sx, sy] = this.viewport.screenCoords([x, 0]);
        ctx.fillText(x.toString(), sx, sy + 15);
      }
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = Math.ceil(minY); y <= maxY; y += 1) {
      if (y !== 0) {
        const [sx, sy] = this.viewport.screenCoords([0, y]);
        ctx.fillText(y.toString(), sx - 15, sy);
      }
    }
  }

}
