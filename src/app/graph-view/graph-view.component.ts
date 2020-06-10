import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, merge, fromEvent } from 'rxjs';

import { ExecEquationService } from '../exec-equation.service';
import { EquationsService } from '../equations.service';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.styl']
})
export class GraphViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  ctxCache: CanvasRenderingContext2D | null = null;
  get ctx(): CanvasRenderingContext2D {
    if (this.ctxCache?.canvas !== this.canvas?.nativeElement) {
      this.ctxCache = this.canvas.nativeElement.getContext('2d');
    }
    return this.ctxCache;
  }

  constructor(private equations: EquationsService, private execEquation: ExecEquationService, private host: ElementRef) { }

  subCache: Subscription | null = null;
  ngOnInit(): void {
    const resize = fromEvent(window, 'resize');
    const updates = merge(this.equations.updates, resize);
    this.subCache = updates.subscribe({ next: () => this.render() })
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {
    if (this.subCache) {
      this.subCache.unsubscribe();
      this.subCache = null;
    }
  }

  render(): void {
    const ctx = this.ctx;
    const host = this.host?.nativeElement;
    if (!ctx || !host) return;
    const width = ctx.canvas.width = host.clientWidth;
    const height = ctx.canvas.height = host.clientHeight - 5;

    ctx.clearRect(0, 0, width, height);

    for (const equation of this.equations.equations) {
      ctx.strokeStyle = 'black';
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

}
