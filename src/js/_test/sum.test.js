import sum from '../_helpers/sum';
import chai from 'chai';
console.log('-------------------- test');
describe('the sum module ',function () {
	it('should return 3 ', function() {
		console.log(sum(1, 2));
		chai.assert.equal(sum(1, 2) , 3);
	});
});