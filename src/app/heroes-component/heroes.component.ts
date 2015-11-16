import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'my-heroes'
})
@View({
    templateUrl: 'app/heroes-component/heroes.component.html',
    styleUrls: ['app/heroes-component/heroes.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroesComponent implements OnInit{
	public heroes: Hero[];
	public selectedHero: Hero;
    public submitted: boolean;

    constructor(private _heroService: HeroService){}

	onSelect(hero:Hero){
		this.selectedHero = hero;
	}
	getSelectedClass(hero: Hero) {
  		return { 'selected': hero === this.selectedHero };
	}
    onInit(){
        this.initList();
    }
    onSubmit(hero: Hero) {
        this._heroService.saveList(hero);
        this.initList();
    }
    initList(){
        this._heroService.getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
    }
}
