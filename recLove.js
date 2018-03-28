//same function so generalizing function names

function findRangeOverlap(point1, length1, point2, length2) {
	let highestStartPoint= Math.max(point1, point2);
	let lowestEndPoint= Math.min((point1 + length1), (point2 + length2));

	//edge case is if highestStart >= lowestEndPoint
	//aka, they do not overlap
	if(highestStartPoint >= lowestEndPoint) {
		return {startPoint: null, endPoint: null}
	}

	let overlapLength= lowestEndPoint - highestStartPoint;

	return {startPoint: highestStartPoint, overLapLength: overlapLength}
}

function findRectangularOverlap(rectangle1, rectangle2) {
	//getting x and y overlaps
	const xOverlap= findRangeOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
	const yOverlap= findRangeOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);

	//edge case
	if(!xOverlap.overLapLength || !yOverlap.overLapLength) {
		return {
			leftX: null,
			bottomY: null,
			width: null,
			height: null
		}
	}

	return {
		leftX: xOverlap.startPoint,
		bottomY: yOverlap.startPoint,
		width:  xOverlap.overLapLength,
		height: yOverlap.overLapLength
	};
}

//helper function to find the two rectangles x overlap
/*unction findXOverlap(x1, width1, x2, width2) {
	let highestStartPoint= Math.max(x1,x2);
	let lowestEndPoint= Math.min((x1 + width1), (x2 + width2));

	//edge case is if highestStart >= lowestEndPoint
	//aka, they do not overlap
	if(highestStartPoint >= lowestEndPoint) {
		return {startPoint: null, endPoint: null}
	}

	let overlapWidth: lowestEndPoint - highestStart;

	return {startPointX: highestStartPoint, width: overlapWidth}
}

function findYOverlap(y1, height1, y2, height2) {
	let highestStartPoint= Math.max(y1,y2);
	let lowestEndPoint= Math.min(y1 + height1, y2 + height2);

	if(highestStartPoint >= lowestEndPoint) {
		return {startPoint: null, endPoint: null}
	}

	let overlapHeight= lowestEndPoint - highestStartPoint;

	return {startPointY: highestStartPoint, height: overlapHeight}
}
*/
module.exports= {
	findRectangularOverlap, 
	findRangeOverlap
}

