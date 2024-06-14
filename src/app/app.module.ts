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

import { LayoutModule }        from '@progress/kendo-angular-layout';
import { LVM }                 from './list-view/list-view.module';
import { TileLayoutComponent } from './tile-layout/tile-layout.component';
import { HeroCardComponent }   from './hero-card/hero-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { GanntComponent } from './gannt/gannt.component';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { StandaloneCardComponent } from './standalone-card/standalone-card.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { NgOptimizedImage } from '@angular/common';
import { ConversationalUIModule } from '@progress/kendo-angular-conversational-ui';



@NgModule({
  imports: [
    NgOptimizedImage,
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
    DropDownsModule,
    LVM,
    IndicatorsModule,
    NavigationModule,
    IconsModule,
    GaugesModule,
    ChartsModule,
    TypographyModule,
    DateInputsModule,
    ListBoxModule,
    StandaloneCardComponent,
    EllipsisPipe,
    NgOptimizedImage,
    SidebarComponent,
    ConversationalUIModule,
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
    HeatmapComponent,
    GanntComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
