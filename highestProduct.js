//find the highest product you can get from three Ints


//could do three nesting loops, but O(n3)...
function findHighestProduct(arr) {
	if(arr.length <3) {
		throw new Error('fxn requires an array with at least 3 values');
	}
	//declare values to keep track throuh looping
	let highestProductOf3= arr[0]* arr[1] * arr[2];
	let highestProductOf2= arr[0]* arr[1];
	let lowestProductOf2= arr[0]* arr[1];
	let highest= Math.max(arr[0], arr[1]);
	let lowest= Math.min(arr[0], arr[1]);
	
	//starting at third item since first two are declared in vars
	for(let i=2; i<arr.length; i++) {
		let currentNum= arr[i];

		//redeclare / update each variable
		highestProductOf3= Math.max( highestProductOf3,
			currentNum * highestProductOf2,
			currentNum * lowestProductOf2
			//this is needed to test two high - nums
			);

		highestProductOf2= Math.max(highestProductOf2,
			currentNum * highest,
			currentNum * lowest //two negative nums
			);

		lowestProductOf2= Math.min(lowestProductOf2,
			currentNum * highest,
			currentNum * lowest
			);

		highest= Math.max(currentNum, highest);
		lowest= Math.min(currentNum, lowest);
	}
	return highestProductOf3;
}

//Note: Sorting method doesn't work with negative nums

module.exports= findHighestProduct;