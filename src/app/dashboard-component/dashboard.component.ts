import {Component, View, NgFor} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Speaker, HeroService} from '../hero.service';
import {HeroCardComponent} from '../hero-card-component/hero.card.component';

@Component({
	selector: 'my-dashboard'
})
@View({
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [NgFor, HeroCardComponent]
})
export class DashboardComponent{

	constructor(private _heroService: HeroService){}

	getHeroes(){
		return this._heroService.getSpeakers();
	}
}
