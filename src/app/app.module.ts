import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';

import { InputsModule }            from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelModule }             from '@progress/kendo-angular-label';
import { ButtonsModule }           from '@progress/kendo-angular-buttons';
import { DropDownsModule }         from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule }        from '@progress/kendo-angular-indicators';

// import { CardModule, TileLayoutModule, ExpansionPanelModule } from '@progress/kendo-angular-layout';
import { LayoutModule }        from '@progress/kendo-angular-layout';
import { LVM }                 from './list-view/list-view.module';
import { TileLayoutComponent } from './tile-layout/tile-layout.component';
import { HeroCardComponent }   from './hero-card/hero-card.component';
import { EllipsisPipe }        from './ellipsis.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { GanntComponent } from './gannt/gannt.component';
import { GanttModule } from '@progress/kendo-angular-gantt';
import { BarcodesModule } from "@progress/kendo-angular-barcodes";
import { FilterModule } from "@progress/kendo-angular-filter";
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { EditorModule } from '@progress/kendo-angular-editor';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { PivotGridModule } from '@progress/kendo-angular-pivotgrid';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 2000 }
    ),
    InputsModule,
    BrowserAnimationsModule,
    LabelModule,
    ButtonsModule,
    LayoutModule,
    // CardModule,
    // TileLayoutModule,
    // ExpansionPanelModule,
    DropDownsModule,
    LVM,
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
    PivotGridModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroCardComponent,
    TileLayoutComponent,
    HeroCardComponent,
    EllipsisPipe,
    SidebarComponent,
    HeatmapComponent,
    GanntComponent,
    PivotGridComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
