import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.component-routing.module';


@NgModule({
  imports: [ DashboardRoutingModule, CommonModule, SharedModule ],
  declarations: [ DashboardRoutingModule.components ]
})
export class DashboardModule { }
