import { Component, ViewEncapsulation } from "@angular/core";
import {
  Dimension,
  Measure,
  PivotGridAxis,
  averageAggregate,
  maxAggregate,
  minAggregate,
  sumAggregate,
} from "@progress/kendo-angular-pivotgrid";
import { DataItem, createData } from "./data";

@Component({
  selector: 'pivot-grid',
  templateUrl: './pivot-grid.component.html',
  styleUrls: ['./pivot-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PivotGridComponent {

  public data: DataItem[] = createData(1000);

  public dimensions: { [key: string]: Dimension } = {
    Category: {
      caption: "Categories",
      displayValue: (item) => item.Category,
      sortValue: (displayValue: string) => displayValue,
    },
    Product: {
      caption: "Products",
      displayValue: (item) => item.Product,
      sortValue: (displayValue: string) => displayValue,
    },
    Region: {
      caption: "Regions",
      displayValue: (item) => item.Region,
      sortValue: (displayValue: string) => displayValue,
    },
    Country: {
      caption: "Countries",
      displayValue: (item) => item.Country,
      sortValue: (displayValue: string) => displayValue,
    },
  };

  public measures: Measure[] = [
    {
      name: "Total",
      value: (item: DataItem): number => item.Price,
      aggregate: sumAggregate,
    },
    {
      name: "Max",
      value: (item: DataItem): number => item.Price,
      aggregate: maxAggregate,
    },
    {
      name: "Min",
      value: (item: DataItem): number => item.Price,
      aggregate: minAggregate,
    },
    {
      name: "Average",
      value: (item: DataItem): number => item.Price,
      aggregate: averageAggregate,
    },
  ];

  public defaultMeasureAxes: PivotGridAxis[] = [{ name: ["Total"] }];

  public defaultRowAxes: PivotGridAxis[] = [
    { name: ["Region"], expand: true },
    { name: ["Country"] },
  ];

  public defaultColumnAxes: PivotGridAxis[] = [
    { name: ["Category"], expand: true },
    { name: ["Product"] },
  ];
  

}
