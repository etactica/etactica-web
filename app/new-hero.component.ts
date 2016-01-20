import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'new-hero',
	template:`

	<div class="container">
	  <div [hidden]="submitted">

	    <h2>Create a new hero</h2>
	    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">

	      <div class="form-group">
	        <label for="name">Name</label>
	        <input type="text"
	          [(ngModel)]="herro.name"
	            ngControl="name"  #name="ngForm" >

	        <div [hidden]="name.valid" class="alert alert-danger">
	          Name is required
	        </div>
	      </div>

	      <div class="form-group">
	        <label for="description">Description</label>
	        <input type="text" 
	          [(ngModel)]="herro.description"
	            ngControl="description" >
	      </div>

	      <div class="form-group">
	        <label for="ranking">Ranking</label>
	        <input type="text" 
	          [(ngModel)]="herro.ranking"
	            ngControl="ranking" >
	      </div>

	      <button type="submit" class="btn btn-default"
	              [disabled]="!heroForm.form.valid" (click)="addHero(herro)">Submit</button>
	    </form>
	  </div>
	  <div [hidden]="!submitted">
	    <h2>You created this hero!</h2>
	    <div class="labs">
			<div><label>Name: </label>{{herro.name}}</div>
			<div><label>Description: </label>{{herro.description}}</div>
			<div><label>Ranking: </label>{{herro.ranking}}</div>
		    <button class="btn btn-default" (click)="submitted=false">Edit</button>
	    </div>
	  </div>
	</div>
	`,
	 styles:[`
		label {
			display: inline-block;
			width: 4em;
			margin: .5em 1.5em 0.5em 0em;
			color: #607D8B;
			font-weight: bold;
		}
		form{
			margin: 10px;
		}
		.labs{
			margin: 10px;
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
		h2 {
			font-size: 2em;
			margin-top: 1.8em;
			padding-top: 0;
			font-family: Cambria, Georgia;
		}

  `]
})
export class NewHeroComponent{

	constructor(private _heroService: HeroService) {
	}

	public herro: Hero{
		id: 1,
		name: 'Dr Q',
		description: 'Is a unicorn',
		ranking: 2

	};

	submitted = false;
  	onSubmit() { this.submitted = true; }
  	addHero(hero: Hero){
  		console.log(hero);
  		this._heroService.postHeroes(hero);
  	}
}