import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroService, Speaker} from '../hero.service';

@Component({
  selector: 'speaker-add',
})
@View({
  templateUrl: 'app/add-component/add.component.html',
  directives: [FORM_DIRECTIVES]
})
export class AddComponent {
	constructor(private _heroService: HeroService){}

	onAdd(name: string, topic: string, date: Date) {
		this._heroService.add(name, topic, date);
	}
}
