import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FilterExpression } from "@progress/kendo-angular-filter";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  // r2 2022
  //PivotGrid in pivot-grid comp
  // ListBox
  public europeanCountries: string[] = [
    "Germany",
    "France",
    "Austria",
    "Belgium",
    "Denmark",
    "Netherlands",
  ];
  public asianCountries: string[] = [
    "China",
    "India",
    "Indonesia",
    "Nepal",
    "Thailand",
    "Yemen",
  ];

  // r1 2022
  // filters
  public filters: FilterExpression[] = [
    {
      field: "country",
      title: "Country",
      editor: "string",
    },
    {
      field: "discontinued",
      title: "Discontinued",
      editor: "boolean",
    },
  ];

  onFilterChange(value: CompositeFilterDescriptor) {
    console.log(value);
  }

  // r3 2021
  // heatmap vars
  public categories = {
    x: ["A1", "A2", "A3", "A4"],
    y: ["B1", "B2", "B3", "B4"],
  };

  public dataR2: any[] = [["A2", "B3", 5], ["A3", "B4", 4], ["A1", "B4", 2], ["A4", "B4", 2], ["A3", "B1", 1]];

  // r2 2021
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
