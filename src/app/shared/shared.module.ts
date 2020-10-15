import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { TransactionItemComponent } from './transaction/transaction-item/transaction-item.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent,
    TransactionItemComponent
  ],
  exports: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent,
    TransactionItemComponent
  ],
})
export class SharedModule { }
