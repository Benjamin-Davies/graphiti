import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquationPanelComponent } from './equation-panel/equation-panel.component';
import { GraphViewComponent } from './graph-view/graph-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationPanelComponent,
    GraphViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
