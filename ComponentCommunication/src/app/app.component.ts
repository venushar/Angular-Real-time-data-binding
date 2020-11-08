import { Component } from '@angular/core';
import { approvalService } from "./approval.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromSibling:string="";
  subscription: Subscription;


constructor(private messageService: approvalService) {
 this.subscription = this.messageService.getMessage()
 .subscribe(mymessage => this.messageFromSibling = mymessage)
}

ngOnDestroy() {
 this.subscription.unsubscribe();
}
ngOnInit() {
  }
 
}
