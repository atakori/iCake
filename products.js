//Write a function tat takes an array and returns
//an array of the product for every other num besides
//the one you are on

/*function findProducts(array) {
	//O(n) Solution
	let multiplier= array.reduce((total, currentNum) => {
  	return total* currentNum;
  }, 1)
  let allProducts= array.map(num => {
  	return multiplier / num;
  })
  	console.log(allProducts);
    return allProducts;
}*/

//attempting without division

/*function findProducts(arr) {
	//O(n2) Solution
	let results= [];
	//run nested loops to multiply each num with
	//all the other nums
	for(let i=0; i<arr.length; i++) {
		let total= 1;
		for(let j=0;j<arr.length;j++) {
			let currentValue= arr[j];
			//if the outerIndex matches the innerIndex
			//do not multiplier by num
			if(j === i) {
				total= total *1;
			} else {
				total= total* currentValue;
			}
		}
		results.push(total);
	}
	return results;
}*/

//Attempt #3 using greedy method

function findProducts(arr) {
	if(arr.length <2) {
		throw new Error('requires at least 2 numbers to get the product of all nums')
	}

	const productsOfNumsExceptIndex= [];

	let productsToNow= 1;

	for(let i=0; i<arr.length;i++){
		productsOfNumsExceptIndex[i]= productsToNow;
		productsToNow *= arr[i]
	}


	productsToNow=1;
	for(let j=arr.length-1; j>=0; j--){
		productsOfNumsExceptIndex[j] *= productsToNow;
		productsToNow *= arr[j]
	}
	return productsOfNumsExceptIndex;
}


module.exports= findProducts;