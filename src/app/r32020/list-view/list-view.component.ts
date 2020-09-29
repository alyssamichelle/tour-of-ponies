import { Component, OnInit } from '@angular/core';
import { ponies } from './ponies';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

import { PagerSettings, PagerPosition, PagerType } from '@progress/kendo-angular-listview';
import { CompileTemplateMetadata } from '@angular/compiler';
import { LoaderComponent } from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  heroes: Hero[];
  avatarLink: string;
  public ponies: any[] = ponies;
  loader:boolean = true;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    var self = this;
    console.log(this);
    this.heroService.getHeroes()
      .subscribe({
        next(heroes) {
          self.heroes = heroes;
          
        },
        complete() {
          console.log('DONE!');
          self.loader = false;
        }
      });
  }

  getAvatarLink(heroId): string {
    let avatarLink = '../assets/mlp-avatars/pony-' + heroId + '.png';

    if (heroId > 53) {
      avatarLink = '../assets/mlp-avatars/pony-11.png';
    }

    return avatarLink;
  }

  // paging options for ListView
  public pageSize = 5;
  public position: PagerPosition = 'bottom';
  public prevNext = true;
  public type: PagerType = 'input'; // 'numeric'

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

    this.ponies = ponies.filter(filterExpession);
  }
}
