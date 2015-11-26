/// <reference path="../../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://heroes2015.firebaseio.com/';

export class Speaker{
	key: string;
	name: string;
	skills: string;
	date: string;
}

export class HeroService{
	firebase : Firebase;
	speakerList : Speaker[];

	constructor(){
		this.firebase = new Firebase(FIREBASE_URL);
		this.speakerList = [];

		this.firebase.on('child_added',
			snapshot => {
				this.speakerList.push(this.createSpeaker(snapshot));
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
		this.firebase.on('child_changed',
			snapshot => {
				this.changeSpeaker(snapshot);
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
		this.firebase.on('child_removed',
			snapshot => {
				this.removeSpeaker(snapshot);
				this.sortList();
			},
			errorObject => console.log('The read failed', errorObject.code)
		);
	}

	save(speaker: Speaker){
		var ref = this.firebase.child(speaker.key);
		var newValues = {
			name:speaker.name,
			skills: speaker.skills,
			date: speaker.date
		};
		ref.update(newValues);
	}

	add(name: string, skills: string, date: Date){
		var newSpeaker = { name:name, skills: skills, date: date };
		this.firebase.push(newSpeaker);
	}

	getHeroes():Speaker[]{
		return this.speakerList;
	}

	remove(speaker: Speaker){
		var ref = this.firebase.child(speaker.key);
		ref.remove();
	}

	private removeSpeaker(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.speakerList.some((speaker, index) => {
			if (speaker.key === key) {
				//remove the speaker.
				this.speakerList.splice(index, 1);
				return true;
			}
		});
	}

	private changeSpeaker(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.speakerList.some((speaker, index) => {
			if (speaker.key === key) {
				var updatedSpeaker = this.createSpeaker(snapshot);
				//update the speaker.
				this.speakerList.splice(index, 1, updatedSpeaker);
				return true;
			}
		});
	}

	private createSpeaker(snapshot: FirebaseDataSnapshot): Speaker{
		var speaker = snapshot.val();
		speaker.key = snapshot.key();
		return speaker;
	}

	private sortList() {
		this.speakerList = this.speakerList.sort((a, b) => {
			return new Date(a.date).valueOf() - new Date(b.date).valueOf();
		});
	}
}
