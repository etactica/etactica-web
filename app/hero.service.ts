import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http'; 
import 'rxjs/Rx';

@Injectable()
export class HeroService {

    constructor(public http: Http) {}

    getHeroes() {
        return this.http.get('http://localhost:8888/list_of_heroes/').map((data) => data.json())
    }

    putHeroes(hero: Hero){

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

    	this.http.put('http://localhost:8888/list_of_heroes/' + hero.id, 
		JSON.stringify(hero),
		{headers:headers})
		.map(res => res.json())
		.subscribe(res => {this.hero = res.json});
		}
/*
    postHeroes(hero: Hero){
    	console.log(hero);
    	console.log(JSON.stringify(hero));

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

    	this.http.post('http://localhost:8888/list_of_heroes/', 
			JSON.stringify(hero),
			{headers:headers})
			.map(res => res.json())
			.subscribe(res => {this.hero = res.json});
	}
*/
	/*
	updateHero(id: number, hero: Hero) {
		return this.http.put('http://localhost:8888/list_of_heroes/' + id, 'PUT', hero);
	}*/
}

