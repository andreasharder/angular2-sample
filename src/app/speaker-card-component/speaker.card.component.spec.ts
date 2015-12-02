import {SpeakerCardComponent} from '../speaker-card-component/speaker.card.component';
import {Speaker} from '../hero.service';


describe('SpeakerCardComponent tests', () => {

	let _serviceMock: any;
	let _component: SpeakerCardComponent;

	beforeEach(() => {
		_serviceMock = new HeroServiceMock();
		spyOn(_serviceMock, 'remove');
		_component = new SpeakerCardComponent(_serviceMock);
	});

	it('should call service when removing a speaker', () => {
		_component.removeSpeaker(new Speaker());
		expect(_serviceMock.remove).toHaveBeenCalled();
	});
});

class HeroServiceMock{
	remove(speaker: Speaker){
	}
}
