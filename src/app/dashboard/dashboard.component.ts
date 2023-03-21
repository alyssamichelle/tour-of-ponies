import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { TileLayoutComponent } from '../tile-layout/tile-layout.component';
import { ExpansionPanelModule } from '@progress/kendo-angular-layout';
import { NgFor } from '@angular/common';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [HeroSearchComponent, NgFor, ExpansionPanelModule, TileLayoutComponent]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter((hero) => !!hero.largeAvatar)
      });
  }
}
