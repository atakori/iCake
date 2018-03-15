const makingChange= require('./countCoins');

test('returns the correct number of possibilies for a given input', () => {
	expect(makingChange(4,[1,2,3])).toEqual(4);
	expect(makingChange(1, [1,2,3,4])).toEqual(1);
	expect(makingChange(9, [1,2,3,9])).toEqual(13);
	expect(makingChange(1, [2,3])).toEqual(0);
});