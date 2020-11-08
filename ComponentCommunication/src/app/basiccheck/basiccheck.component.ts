import { Component, OnInit } from '@angular/core';
import { approvalService } from "../approval.service";
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-basiccheck',
 templateUrl: './basiccheck.component.html',
 styleUrls: ['./basiccheck.component.css']
})
export class BasiccheckComponent implements OnInit {
 message:string="";
 approvalText:string="";


 ngOnInit() {

 }


constructor(private messageService: approvalService) {
}

submit()
{
console.log("At app component");
localStorage.setItem('message',this.approvalText);
this.messageService.updateMessage(this.approvalText);
}
}