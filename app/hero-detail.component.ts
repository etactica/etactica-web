import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <div><label>details: </label>{{hero.details}}</div>
      <div><label>ranking: </label>{{hero.ranking}}</div>
      <button (click)="postHero(hero)">Save</button>
    </div>
  `,
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;

  constructor(private _heroService: HeroService) {
  }
    postHero(hero) {
    this._heroService.postHeroes(hero);
  }
}
