
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class approvalService {

  myMessage = new Subject<string>();

 constructor() {
 }
 
 getMessage(): Observable<string>{
  return this.myMessage.asObservable();
}

updateMessage(message: string) {
  this.myMessage.next(message);
}
}