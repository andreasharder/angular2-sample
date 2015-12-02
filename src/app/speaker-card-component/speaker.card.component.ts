import {Component, View} from 'angular2/angular2';
import {HeroService, Speaker} from '../hero.service';

@Component({
  selector: 'speaker-card',
  properties: ['speaker']
})
@View({
    templateUrl: 'app/speaker-card-component/speaker.card.component.html'
})
export class SpeakerCardComponent {
    constructor(private _heroService: HeroService){}

    removeSpeaker(speaker: Speaker){
        this._heroService.remove(speaker);
    }
}
