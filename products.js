//Write a function tat takes an array and returns
//an array of the product for every other num besides
//the one you are on

function findProducts(array) {
	//O(n) Solution
	let multiplier= array.reduce((total, currentNum) => {
  	return total* currentNum;
  }, 1)
  let allProducts= array.map(num => {
  	return multiplier / num;
  })
  	console.log(allProducts);
    return allProducts;
}

//attempting without division

function findProducts(arr) {
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
}

module.exports= findProducts;