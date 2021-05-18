import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public items: Array<any> = [
    { text: "Dashboard", icon: "home", selected: true },
    { text: "Heroes", icon: "person" },
  ];
}
