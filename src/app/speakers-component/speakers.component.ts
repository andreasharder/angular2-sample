import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Speaker, HeroService} from '../hero.service';
import {DetailsComponent} from '../details-component/details.component';

@Component({
    selector: 'my-speakers'
})
@View({
    templateUrl: 'app/speakers-component/speakers.component.html',
    styleUrls: ['app/speakers-component/speakers.component.css'],
    directives: [CORE_DIRECTIVES, DetailsComponent]
})
export class SpeakersComponent{
	public selectedSpeaker: Speaker;

    constructor(private _heroService: HeroService){}

	onSelect(speaker:Speaker){
		this.selectedSpeaker = speaker;
	}
    getSpeakers(){
        return this._heroService.getSpeakers();
    }
}
