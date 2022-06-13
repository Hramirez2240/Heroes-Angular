import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = "";

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

}
