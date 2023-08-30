import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquationEngineRoutingModule } from './equation-engine-routing.module';
import { EquationEngineComponent } from './equation-engine.component';


@NgModule({
  declarations: [
    EquationEngineComponent
  ],
  imports: [
    CommonModule,
    EquationEngineRoutingModule
  ]
})
export class EquationEngineModule { }
