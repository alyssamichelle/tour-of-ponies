import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'tile-layout',
  templateUrl: './tile-layout.component.html',
  styleUrls: ['./tile-layout.component.scss']
})
export class TileLayoutComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }
  public items: any = [
    { title: 'Barcelona', col: 1, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/barcelona.jpg' },
    { title: 'Sofia', col: 2, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/sofia.jpg' },
    { title: 'South Africa', col: 1, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/south-africa.jpg' },
    { title: 'Rome', col: 2, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/rome.jpg' },
    { title: 'San Francisco', col: 1, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/sanfran.jpg' },
    { title: 'Sea View Apartments', col: 2, imageSrc: 'https://demos.telerik.com/kendo-ui/content/web/cards/seaview-appartments.png' }
  ];
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
