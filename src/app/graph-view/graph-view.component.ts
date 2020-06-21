import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';

import { EquationsService } from '../equations.service';
import { ExecEquationService } from '../exec-equation.service';

type Ctx = CanvasRenderingContext2D;

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.styl'],
})
export class GraphViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  zoom = 0;

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
    this.zoom += event.deltaY / 100;
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
    const scale = Math.min(width, height) * Math.pow(2, this.zoom);

    ctx.clearRect(0, 0, width, height);

    this.renderAxes(ctx, width, height, scale);
    this.renderEquations(ctx, width, height, scale);
  }

  renderEquations(ctx: Ctx, width: number, height: number, scale: number) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';

    for (const equation of this.equations.equations) {
      ctx.beginPath();
      for (let sx = 0; sx < width; sx += 5) {
        const x = (sx - width / 2) / scale;
        const { y } = this.execEquation.execEquation(equation, { x });
        const sy = -y * scale + height / 2;
        ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }
  }

  renderAxes(ctx: Ctx, width: number, height: number, scale: number) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.font = '12pt sans-serif';

    // Draw all of the lines first
    ctx.beginPath();

    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    for (let x = -3; x <= 3; x += 1) {
      ctx.moveTo((x / 6 + 0.5) * width, height / 2);
      ctx.lineTo((x / 6 + 0.5) * width, height / 2 + 10);
    }

    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    for (let y = -3; y <= 3; y += 1) {
      ctx.moveTo(width / 2     , (-y / 6 + 0.5) * height);
      ctx.lineTo(width / 2 - 10, (-y / 6 + 0.5) * height);
    }

    ctx.stroke();

    // Then the text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = -3; x <= 3; x += 1) {
      if (x !== 0) {
        ctx.fillText(x.toString(), (x / 6 + 0.5) * width, height / 2 + 15);
      }
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let y = -3; y <= 3; y += 1) {
      if (y !== 0) {
        ctx.fillText(y.toString(), width / 2 - 15, (y / 6 + 0.5) * height);
      }
    }
  }

}
