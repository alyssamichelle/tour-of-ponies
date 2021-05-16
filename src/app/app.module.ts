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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
