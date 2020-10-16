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
  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  transfer = (value: NgForm) => {
  }

  makeTransfer = (data) => {
    this.transferService.sendTransfer(data);
  }

}
