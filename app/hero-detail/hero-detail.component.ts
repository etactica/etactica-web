import {Component} from 'angular2/core';
import {Hero} from './../shared/hero';
import {HeroService} from './../shared/hero.service';


@Component({
    selector: 'hero-detail',
    templateUrl: './app/hero-detail/hero-detail.html',
    stylesUrls: ['./app/hero-detail/hero-detail.less'],
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero:Hero;

    constructor(private _heroService:HeroService) {
    }

    putHero() {
        this._heroService.putHero(this.hero).subscribe(hero => this.hero = undefined);
    }

    deleteHero() {
        this._heroService.deleteHero(this.hero).subscribe(result => console.log(result));
    }

    likeHero() {
        this.hero.ranking++;
    }

    dislikeHero() {
        this.hero.ranking--;
    }
}
