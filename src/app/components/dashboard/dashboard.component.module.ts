import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard.component-routing.module';


@NgModule({
  imports: [ DashboardRoutingModule, CommonModule ],
  declarations: [ DashboardRoutingModule.components ]
})
export class DashboardModule { }
