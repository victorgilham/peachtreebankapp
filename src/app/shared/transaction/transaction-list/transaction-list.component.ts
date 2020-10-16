import { Component, OnInit } from '@angular/core';

import { TransferService } from './../../../core/services/transfer.service';
import mockTransactions from './mock/transactions.json';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions = mockTransactions.data;
  searchbox = '';
  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.currentTransfer.subscribe(transfer => {
      let transferObj;
      transferObj = {
        dates: {
          valueDate: Date.now()
        },
        transaction: {
          amountCurrency: {
            amount: transfer.amount,
            currencyCode: ''
          },
          type: 'Online Transfer',
          creditDebtIndicator: 'DBIT'
        },
        merchant: {
          accountNumber: 'SI64397745065188826',
          name: transfer.to,
          logo: 'assets/icons/backbase.png'
        }
      };

      this.transactions.unshift(transferObj);
    });

  }
  sortBy = (type: string) => {
    this.transactions.sort((a, b) => {
      if (type === 'date') {
        return (a.transaction.amountCurrency.amount as number) - (b.transaction.amountCurrency.amount as number);
      }
      if (type === 'beneficiary') {
        return a.merchant.name.localeCompare(b.merchant.name);
      }
      if (type === 'amount') {
        return (a.transaction.amountCurrency.amount as number) - (b.transaction.amountCurrency.amount as number);
      }
    });
  }


}
