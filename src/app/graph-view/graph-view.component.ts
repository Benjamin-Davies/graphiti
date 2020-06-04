import { Component, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Equation } from '../equation';
import { ExecEquationService } from '../exec-equation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.styl']
})
export class GraphViewComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() equation: Equation;

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  ctxCache: CanvasRenderingContext2D | null = null;
  get ctx(): CanvasRenderingContext2D {
    if (this.ctxCache?.canvas !== this.canvas.nativeElement) {
      this.ctxCache = this.canvas.nativeElement.getContext('2d');
    }
    return this.ctxCache;
  }

  constructor(private execEquation: ExecEquationService) { }

  subCache: Subscription | null = null;
  ngOnInit(): void {
    this.subCache = this.equation.updates.subscribe({ next: () => this.render() })
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {
    this.subCache.unsubscribe();
    this.subCache = null;
  }

  render(): void {
    console.log(this.equation.text);
    const ctx = this.ctx;
    if (!ctx) return;
    const { width, height } = ctx.canvas;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    for (let sx = 0; sx < width; sx += 5) {
      const x = 6 * (sx / width) - 3;
      const { y } = this.execEquation.execEquation(this.equation, { x });
      const sy = (-y / 6 + 0.5) * height;
      ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

}
