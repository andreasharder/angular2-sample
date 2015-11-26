import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Speaker, HeroService} from '../hero.service';
import {DetailsComponent} from '../details-component/details.component';

@Component({
    selector: 'my-heroes'
})
@View({
    templateUrl: 'app/heroes-component/heroes.component.html',
    styleUrls: ['app/heroes-component/heroes.component.css'],
    directives: [CORE_DIRECTIVES, DetailsComponent]
})
export class HeroesComponent{
	public selectedHero: Speaker;

    constructor(private _heroService: HeroService){}

	onSelect(hero:Speaker){
		this.selectedHero = hero;
	}
    getHeroes(){
        return this._heroService.getSpeakers();
    }
}
