import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './../shared/hero';
import {HeroService} from './../shared/hero.service';

@Component({
    selector: 'new-hero',
    templateUrl: './app/new-hero/new-hero.html',
    stylesUrls: ['./app/new-hero/new-hero.less']
})
export class NewHeroComponent {
    hero = new Hero(1, '', '', null);

    constructor(private _heroService:HeroService) {

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    addHero(hero:Hero) {
        this._heroService.postHero(hero).subscribe(res => {this.hero = hero})
    }
}