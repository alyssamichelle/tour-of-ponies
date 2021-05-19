import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  public value:number = 42;
  public items: Array<any> = [];

  constructor(private router: Router) {
    const routes: any[] = router.config;
    console.log('routes ', routes);
    routes.forEach((route) => {
      if (route.icon) {
        this.items.push({
          icon: route.icon,
          text: route.text,
        });
      }
    });

    this.items[0].selected = true;
  }

  public data: any[] = [
    {
      text: "Furniture",
      id: 1,
      items: [
        { text: "Tables & Chairs", id: 2 },
        { text: "Sofas", id: 3 },
        { text: "Occasional Furniture", id: 4 },
      ],
    },
    {
      text: "Decor",
      id: 5,
      items: [
        { text: "Bed Linen", id: 6 },
        { text: "Carpets", id: 7 },
      ],
    },
  ];

}
