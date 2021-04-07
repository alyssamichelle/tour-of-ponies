import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'tile-layout',
  templateUrl: './tile-layout.component.html',
  styleUrls: ['./tile-layout.component.scss'],
})
export class TileLayoutComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter((hero) => !!hero.avatar)
      });
  }

}
