import { Component, OnInit } from '@angular/core';
import { ponies } from './ponies';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

import { PagerSettings, PagerPosition, PagerType } from '@progress/kendo-angular-listview';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  heroes: Hero[];
  avatarLink: string;
  public ponies: any[] = ponies;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
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
}
