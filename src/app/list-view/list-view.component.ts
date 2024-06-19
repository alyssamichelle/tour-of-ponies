import { Component, Input } from '@angular/core';

import { Pony } from '../pony';
import { HeroService } from '../hero.service';

import { PagerSettings, PagerPosition, PagerType } from '@progress/kendo-angular-listview';
import { LoaderComponent } from '@progress/kendo-angular-indicators';
import { xIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent {
  @Input() heroes: Pony[];
  avatarLink: string;
  loader:boolean = true;
  public icons = { x: xIcon };

  constructor(private heroService: HeroService) { }

  name: string;
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Pony)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Pony): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getAvatarLink(heroId): string {
    let avatarLink = '../assets/mlp-avatars/pony-' + heroId + '.png';
    // let avatarLink = "../assets/mlp-avatars/pony-c3f9c1d1-ccb9-4a56-a62e-c12f8e292a87.png";

    return avatarLink;
  }

  // paging options for ListView
  public pageSize = 5;
  public position: PagerPosition = 'bottom';
  public type: PagerType = 'numeric'; // 'numeric'
  public prevNext = true;

  public get pagerSettings(): PagerSettings {
    return {
      position: this.position,
      previousNext: this.prevNext,
      type: this.type,
    };
  }

  // filtering with search TextBox on ListView
  public handleFilterChange(query: string): void {
    const normalizedQuery = query.toLowerCase();
    const filterExpession = item =>
      item.name.toLowerCase().indexOf(normalizedQuery) !== -1 || 
      (item.alias != null && 
      item.alias?.toLowerCase().indexOf(normalizedQuery) !== -1);

    this.heroes = this.heroes.filter(filterExpession);
  }
}

