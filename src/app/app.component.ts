import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  public items: Array<any> = [];

  constructor(private router: Router) {
    const routes: any[] = router.config;
    
    routes.forEach((route) => {
      if(route.icon) {
        this.items.push({
          icon: route.icon,
          text: route.text,
          path: route.path ? route.path : "",
        });
      }
    });

    this.items[0].selected = true;
  }
}