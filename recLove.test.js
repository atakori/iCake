const recLove= require('./recLove');

let rec1= {
	leftX: 1,
	bottomY: 1,
	width: 5,
	height: 10
}

let rec2= {
	leftX: 3,
	bottomY: 4,
	width: 2,
	height: 3
}

let recNull= {
	leftX: null,
	bottomY: null,
	width: null,
	height: null
}

test('should return the object', () => {
	expect(recLove.findRectangularOverlap(rec1,recNull)).toHaveProperty('leftX');
	expect(recLove.findRectangularOverlap(rec1,recNull)).toHaveProperty('bottomY');
	expect(recLove.findRectangularOverlap(rec1,recNull)).toHaveProperty('width');
	expect(recLove.findRectangularOverlap(rec1,recNull)).toHaveProperty('height');
})

test('should return null values', () => {
	expect(recLove.findRectangularOverlap(recNull,rec2).leftX).toBe(null);
	expect(recLove.findRectangularOverlap(recNull,rec2).bottomY).toBe(null);
	expect(recLove.findRectangularOverlap(recNull,rec2).width).toBe(null);
	expect(recLove.findRectangularOverlap(recNull,rec2).height).toBe(null);
})

test('should return correct values', () => {
	expect(recLove.findRectangularOverlap(rec1,rec2).leftX).toBe(3);
	expect(recLove.findRectangularOverlap(rec1,rec2).bottomY).toBe(4);
	expect(recLove.findRectangularOverlap(rec1,rec2).width).toBe(2);
	expect(recLove.findRectangularOverlap(rec1,rec2).height).toBe(3);
})