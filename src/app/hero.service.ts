/// <reference path="../../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://heroes2015.firebaseio.com/';

export class Hero{
	key: string;
	name: string;
	score: number;
	skills: string;
	date: string;
}

export class HeroService{
	firebase : Firebase;
	heroList : Hero[];

	constructor(){
		this.firebase = new Firebase(FIREBASE_URL);
		this.heroList = [];

		this.firebase.on('child_added',
			snapshot => {
				this.heroList.push(this.createHero(snapshot));
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
		this.firebase.on('child_changed',
			snapshot => {
				this.changeHero(snapshot);
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
		this.firebase.on('child_removed',
			snapshot => {
				this.removeHero(snapshot);
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
	}

	save(hero: Hero){
		var ref = this.firebase.child(hero.key);
		var newValues = {
			name:hero.name,
			score:hero.score,
			skills: hero.skills,
			date: hero.date
		};
		ref.update(newValues);
	}

	add(name: string, skills: string, date: Date){
		var newHero = { name:name, skills: skills, date: date };
		this.firebase.push(newHero);
	}

	getHeroes():Hero[]{
		return this.heroList;
	}

	remove(hero: Hero){
		var ref = this.firebase.child(hero.key);
		ref.remove();
	}

	private removeHero(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.heroList.some((hero, index) => {
			if (hero.key === key) {
				//remove the hero.
				this.heroList.splice(index, 1);
				return true;
			}
		});
	}

	private changeHero(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.heroList.some((hero, index) => {
			if (hero.key === key) {
				var updatedHero = this.createHero(snapshot);
				//update the hero.
				this.heroList.splice(index, 1, updatedHero);
				return true;
			}
		});
	}

	private createHero(snapshot: FirebaseDataSnapshot): Hero{
		var hero = snapshot.val();
		hero.key = snapshot.key();
		return hero;
	}

	private sortList() {
		this.heroList = this.heroList.sort((a, b) => {
			return new Date(a.date) - new Date(b.date);
		});
	}
}
