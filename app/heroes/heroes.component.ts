import {Component, OnInit} from 'angular2/core';
import {HeroService} from './../shared/hero.service.ts';
import {HeroDetailComponent} from './../hero-detail/hero-detail.component.ts';
import {Hero} from './../shared/hero';
import {Http} from 'angular2/http';


@Component({
    selector: 'heroes',
    templateUrl: './app/heroes/heroes.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    public heroes:Hero[];
    public selectedHero:Hero;

    constructor(private _heroService:HeroService) {
        console.log('hohoho')
        this.getHero(6);

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

    getHero(id:number){
        console.log('getHero');
        this._heroService.getHero(id).subscribe(hero => {
            console.log('just got Hero');

            console.log(hero);
        });
    }
}
