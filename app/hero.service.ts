import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {

    constructor(public http: Http) {}

    getHeroes() {
        return this.http.get('http://localhost:4000/list_of_heroes/').map((data) => data.json())
    }
}
