import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
    private aws:string = 'https://bx2zwhpoi0.execute-api.eu-west-1.amazonaws.com/prod/heroes/';
    private local:string = 'http://localhost:8888/list_of_heroes/';
    private useLocal: boolean = false;

    constructor(public http:Http) {
    }

    path(){
        return this.useLocal ? this.local : this.aws;
    }

    getHeroes() {
        return this.http.get(this.path()).map((data) => data.json())
    }

    getHero(id:number){
        return this.http.get(this.path() + id).map((data) => data.json())
    }

    putHero(hero:Hero) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.path() + hero.id,
            JSON.stringify(hero),
            {headers: headers});
    }

    postHero(hero:Hero) {
        console.log(JSON.stringify(hero));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8888/list_of_heroes',
            JSON.stringify(hero),
            {headers: headers});
    }

    deleteHero(hero:Hero) {
        return this.http.delete(this.path() + hero.id);
    }
}
