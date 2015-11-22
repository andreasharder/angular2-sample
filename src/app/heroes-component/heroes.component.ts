import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
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
	public heroes: Hero[];
	public selectedHero: Hero;

    constructor(private _heroService: HeroService){}

	onSelect(hero:Hero){
		this.selectedHero = hero;
	}
    onInit(){
        this._heroService.getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
    }
}
