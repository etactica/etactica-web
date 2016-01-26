import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from '../shared/hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../shared/hero.service';
import {NewHeroComponent} from '../new-hero/new-hero.component';
import {HeroesComponent} from '../heroes/heroes.component.ts';
import {LlamaComponent} from '../llama/llama.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app/app.html',
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
