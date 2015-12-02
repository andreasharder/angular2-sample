import {Speaker} from './hero.service';

describe('Speaker tests', () => {
  it('should create a speaker', () => {
	  expect(new Speaker()).not.toEqual(undefined);
  });
});
