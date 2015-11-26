import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroService, Hero} from '../hero.service';

@Component({
  selector: 'hero-add',
})
@View({
  templateUrl: 'app/add-component/add.component.html',
  directives: [FORM_DIRECTIVES]
})
export class AddComponent {
	constructor(private _heroService: HeroService){}

	onAdd(name: string, skills: string, date: Date) {
		this._heroService.add(name, skills, date);
	}
}
