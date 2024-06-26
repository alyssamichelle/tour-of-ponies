import { Component, effect, input, output } from '@angular/core';

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
  heroes: Pony[];
  heroesList = input<Pony[]>();
  onAdd = output<unknown>();
  onDelete = output<unknown>();

  avatarLink: string;
  loader:boolean = true;
  public icons = { x: xIcon };

  constructor(private heroService: HeroService) {
    effect(() => {
      this.heroes = this.heroesList();
    })
  }

  name: string;

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

