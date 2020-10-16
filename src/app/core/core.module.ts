import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { TransferService } from './services/transfer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TransferService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the root module only'
      );
    }
  }
}
