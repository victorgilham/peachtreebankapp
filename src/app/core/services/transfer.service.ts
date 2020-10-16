import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferData = new Subject<any>();
  currentTransfer = this.transferData.asObservable();

  constructor() { }

  sendTransfer = (data) => {
    this.transferData.next(data);
  }

}
