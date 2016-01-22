import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
    selector: 'hero-detail',
    template: `
    <div class="cont" *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <div>
        <label>details: </label>
         <input [(ngModel)]="hero.details" placeholder="details"/>
      </div>
      <div><label>ranking: </label>{{hero.ranking}}</div>
      <img (click)="likeHero()" src="dist/img/like.png" />
      <img class="dislike" (click)="dislikeHero()" src="dist/img/like.png" /><br>
      <button (click)="putHero()">Update</button>
      <button (click)="deleteHero()">Delete</button>
    </div>
  `,
    styles: [`
    .cont{
      display: inline-block;
    }
    h2 {
      font-size: 1.5em;
      padding-top: 0;
      font-family: Cambria, Georgia;
    }
    label {
      display: inline-block;
      width: 4em;
      margin: .5em 1em 0em 0em;
      color: #607D8B;
      font-weight: bold;
    }
    button {
      margin-top: 10px;
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    .dislike {
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        transform: rotate(180deg);
        filter: FlipH;
        -ms-filter: "FlipH";
    }
    img{
        margin-top: 20px;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }

    img:hover{
      background-color: #cfd8dc;
    }
  `],
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
