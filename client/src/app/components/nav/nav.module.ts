import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PureNavComponent } from './pure-nav-component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent, PureNavComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavComponent, PureNavComponent],
})
export class NavModule {}
