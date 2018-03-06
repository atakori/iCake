const findProducts= require('./products');

test('should return the appropriate products', () => {
	expect(findProducts([1,2,3,4])).toEqual([24,12,8,6])
})