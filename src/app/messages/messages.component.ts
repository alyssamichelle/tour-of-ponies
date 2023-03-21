import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    standalone: true,
    imports: [NgIf, ButtonModule, NgFor]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
