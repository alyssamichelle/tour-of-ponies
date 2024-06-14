import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FilterExpression, FilterModule } from "@progress/kendo-angular-filter";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { CardModule, ExpansionPanelModule, LayoutModule, TileLayoutModule, TimelineModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ChartsModule, SankeyData } from '@progress/kendo-angular-charts';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { GanttModule } from '@progress/kendo-angular-gantt';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { EditorModule } from '@progress/kendo-angular-editor';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { StandaloneCardComponent } from '../standalone-card/standalone-card.component';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { NgOptimizedImage } from '@angular/common';
import { TimelineEvent } from '@progress/kendo-angular-layout/timeline/models/timeline-event';
import {
  AIPromptComponent,
  CommandExecuteEvent,
  ConversationalUIModule,
  PromptCommand,
  PromptOutput,
  PromptRequestEvent,
} from "@progress/kendo-angular-conversational-ui";

import { events } from "./events";
import { data } from "./sankey-data";
import { PivotGridComponent } from '../pivot-grid/pivot-grid.component';

@Component({
  standalone: true,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    TimelineModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    LayoutModule,
    CardModule,
    TileLayoutModule,
    ExpansionPanelModule,
    DropDownsModule,
    IndicatorsModule,
    NavigationModule,
    IconsModule,
    GaugesModule,
    ChartsModule,
    TypographyModule,
    GanttModule,
    BarcodesModule,
    FilterModule,
    TooltipsModule,
    DateInputsModule,
    EditorModule,
    ListBoxModule,
    PivotGridComponent,
    StandaloneCardComponent,
    EllipsisPipe,
    NgOptimizedImage,
    ConversationalUIModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  //q2 2024
  //aiprompt

  public activeView: number = 0;
  public promptOutputs: Array<PromptOutput> = [];
  private idCounter = 0;
  public onPromptRequest(ev: PromptRequestEvent): void {
    // Execute a call to the LLM API.

    const output: PromptOutput = {
      id: this.idCounter++,
      prompt: ev.prompt,
      output: "This is a mocked response.",
    };

    this.promptOutputs.unshift(output);
    this.activeView = 1;
  }
  
  //Sankey Chart
  public sankeyData: SankeyData = data;
  
  // Timeline
  public events: TimelineEvent[] = events;

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
      this.items.push({
        icon: route.icon,
        title: route.text,
      });
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
