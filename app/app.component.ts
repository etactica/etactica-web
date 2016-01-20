import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {NewHeroComponent} from './new-hero.component';
import {HeroesComponent} from './heroes.component';


@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>

    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['NewHero']">New Hero</a>
    <router-outlet></router-outlet>

  `,
    styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
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
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
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
    a {
      padding: 5px 10px;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 4px;
    }
    a:visited, a:link {
      color: #607D8B;
    }
    a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }
    a.router-link-active {
      color: #039be5;
    }
    h1 {
      font-size: 1.2em;
      color: #999;
      margin-bottom: 0;
    }
    h2 {
      font-size: 2em;
      margin-top: 0;
      padding-top: 0;
    }
    body { margin: 2em; }
    body, input[text], button { color: #888; font-family: Cambria, Georgia; }
    button { padding: 0.2em; font-size: 14px}
    * { font-family: Arial; }
  `],
    directives: [HeroDetailComponent, ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
  {path: '/newhero', name: 'NewHero', component: NewHeroComponent},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent}
])
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().subscribe(heroes => { this.heroes = heroes });
    }
    addHero(){

    }
    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}

