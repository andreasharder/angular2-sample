import {Component, View, NgFor} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Speaker, HeroService} from '../hero.service';
import {SpeakerCardComponent} from '../speaker-card-component/speaker.card.component';

@Component({
	selector: 'my-dashboard'
})
@View({
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [NgFor, SpeakerCardComponent]
})
export class DashboardComponent{

	constructor(private _heroService: HeroService){}

	getSpeaker(){
		return this._heroService.getSpeakers();
	}
}
