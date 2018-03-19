import sum from '../_helpers/sum';
import chai from 'chai';

describe('the sum module ',function () {
	it('should return 3 ', function(done) {
		chai.assert(sum(1, 2),3);
		done();
	});
});