import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent
  ],
  exports: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent
  ],
})
export class SharedModule { }
