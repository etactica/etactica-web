import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './shared/hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './shared/hero.service';
import {NewHeroComponent} from './new-hero/new-hero.component';
import {HeroesComponent} from './heroes/heroes.component.ts';
import {LlamaComponent} from './llama/llama.component';

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>

    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['NewHero']">New Hero</a>
    <router-outlet></router-outlet>
    <br>
    <llama></llama>
  `,
    styles:[`

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

    body { margin: 2em; }
    body, input[text], button { color: #888; font-family: Cambria, Georgia; }
    button { padding: 0.2em; font-size: 14px}
    * { font-family: Arial; }
  `],
    directives: [HeroDetailComponent, LlamaComponent, ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    {path: '/newhero', name: 'NewHero', component: NewHeroComponent},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent}
])
export class AppComponent {
    public title = 'Tour of Heroes';
}
