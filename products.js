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
	let results= [];
	//run nested loops to multiply each num with
	//all the other nums
	for(let i=0; i<arr.length; i++) {
		let total= 1;
		for(let j=0;i<arr.length;j++) {
			let currentValue= arr[j];
			//if the outerIndex matches the innerIndex
			//do not mult by num
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