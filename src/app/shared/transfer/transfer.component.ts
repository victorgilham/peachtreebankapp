import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TransferService } from './../../core/services/transfer.service';
import { Transfer } from './models/transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferModel: Transfer = new Transfer();
  totalBalance = 5824.76;
  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  transfer = (value: NgForm) => {
  }

  makeTransfer = (data: NgForm) => {
    if (data.value.amount > this.totalBalance + 500) {
      alert('Sorry you can not overdraft more than -$500 of your total balance');
      return;
    }
    const value = confirm(`You are transferring $ ${data.value.amount}`);
    if (!value) {
      return;
    }
    this.totalBalance -= data.value.amount;
    this.transferService.sendTransfer(data.value);
    data.form.reset();
  }

}
