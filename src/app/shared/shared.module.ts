import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { TransactionItemComponent } from './transaction/transaction-item/transaction-item.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent,
    TransactionItemComponent,
    FilterSearchPipe
  ],
  exports: [
    HeaderComponent,
    TransferComponent,
    TransactionListComponent,
    TransactionItemComponent,
    FilterSearchPipe
  ],
})
export class SharedModule { }
