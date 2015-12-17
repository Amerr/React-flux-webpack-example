import {expect} from 'chai';

describe('immutability', ()=> {
	describe('a number', () => {
		function increment(currentState) {
			return currentState + 1
		}
		it('is immutable', ()=> {
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
			expect(state).to.equal(43);
		})
	});

	describe('A List ', ()=> {
		function addMovie(currentState, movie) {
			return currentState.push(movie);
		}

		it('is immutable', () =>{
			let state = List.of('Tranport', '28 Days later');
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(List.of(
				'Tranport','28 Days later', 'Sunshine'
			));

			expect(state).to.equal(List.of(
				'Tranport','28 Days later'
			));
		});
	});
});
