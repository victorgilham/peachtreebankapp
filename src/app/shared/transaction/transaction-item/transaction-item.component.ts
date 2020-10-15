import { Component, Input, OnInit } from '@angular/core';

import { ITransaction } from './_intefaces/transaction.interface';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {
  @Input() transactionItem: ITransaction;

  constructor() { }

  ngOnInit() {
  }

}
