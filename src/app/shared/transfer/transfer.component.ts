import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Transfer } from './models/transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferModel: Transfer = new Transfer();
  constructor() { }

  ngOnInit(): void {
  }

  transfer = (value: NgForm) => {
  }

}
