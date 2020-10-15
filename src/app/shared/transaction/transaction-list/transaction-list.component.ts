import { Component, OnInit } from '@angular/core';

import mockTransactions from './mock/transactions.json';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions = mockTransactions.data;
  searchbox = '';
  constructor() { }

  ngOnInit() {
  }

}
