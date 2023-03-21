import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, RouterLinkActive, RouterOutlet, SidebarComponent, MessagesComponent]
})

// export class AppComponent {
  // For Basic BottomNav Example
  // public items: Array<any> = [
  //   { text: "Dashboard", icon: "home", selected: true, path:"/dashboard" },
  //   { text: "Heroes", icon: "star", path: "/heroes" },
  // ];
// }

// But what about hooking in actual routes???
export class AppComponent {
}