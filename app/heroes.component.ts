import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {Http} from 'angular2/http';


@Component({
  selector: 'my-heroes',
  template:` 
    <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.ranking}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  </div>
`
,
  styles:
  [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  h2 {
    font-size: 2em;
    margin-top: 1.8em;
    padding-top: 0;
    font-family: Cambria, Georgia;
  }
  .heroes {
    margin: 0 4em 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
    display: inline-block;
    float: left;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .heroes li.selected:hover {
    color: white;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
  button {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }

`],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) { }

    getHeroes() {
        this._heroService.getHeroes().subscribe(heroes => { this.heroes = heroes });
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}


