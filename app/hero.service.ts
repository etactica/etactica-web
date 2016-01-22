import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {

    constructor(public http:Http) {
    }

    getHeroes() {
        /*
        var data = [{
            "id": 123,
            "name": "Maggi",
            "details": "details",
            "ranking": 1
        }];
        return data;*/
        //return data.map(x=>x);
        return this.http.get('http://localhost:8888/list_of_heroes/').map((data) => data.json())
    }

    putHero(hero:Hero) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put('http://localhost:8888/list_of_heroes/' + hero.id,
            JSON.stringify(hero),
            {headers: headers});
    }

    postHero(hero:Hero) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8888/list_of_heroes',
            JSON.stringify(hero),
            {headers: headers});
    }

    deleteHero(hero:Hero) {
        return this.http.delete('http://localhost:8888/list_of_heroes/' + hero.id);
    }
}

