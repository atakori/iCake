const findHighestProduct= require('./highestProduct');

test('should return the highest product from the three highest Ints', () => {
	expect(findHighestProduct([1,2,3])).toBe(6);
	expect(findHighestProduct([2,4,9,3,8])).toBe(288);
	expect(findHighestProduct([-1,8,4,-3,-2])).toBe(48);
})