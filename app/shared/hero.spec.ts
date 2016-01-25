import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {Hero} from './hero';
    describe('Hero', () => {
        it('has the id given in the constructor', function() {
            var hero = new Hero(1, 'Super Cat', 'master', 20);
            expect(hero.id).toEqual(1);
        });
        it('has name given in the constructor', function() {
            var hero = new Hero(1, 'Super Cat', 'master', 20);
            expect(hero.name).toEqual('Super Cat');
        });
        it('has details given in the constructor', function() {
            var hero = new Hero(1, 'Super Cat', 'master', 20);
            expect(hero.details).toEqual('master');
        });
        it('has ranking given in the constructor', function() {
            var hero = new Hero(1, 'Super Cat', 'master', 20);
            expect(hero.ranking).toEqual(20);
        });
})
