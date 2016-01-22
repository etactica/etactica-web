import {Component, OnInit} from 'angular2/core';
import {HeroService} from './../shared/hero.service.ts';
import {HeroDetailComponent} from './../hero-detail/hero-detail.component.ts';
import {Hero} from './../shared/hero';
import {Http} from 'angular2/http';


@Component({
    selector: 'heroes',
    templateUrl: './app/heroes/heroes.html',
    styleUrls: ['./app/heroes/heroes.less'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    public heroes:Hero[];
    public selectedHero:Hero;

    constructor(private _heroService:HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes
        });
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}


