function makingChange(amountLeft, denominations, currentIndex) {
	currentIndex= (typeof currentIndex !== 'undefined') ? currentIndex : 0;

	//make base cases to end recursion
  if(amountLeft === 0) {
  	return 1; //current route results in perfect pymnt
  }

	if(amountLeft <0) {
  	return 0; // current set of denoms do not total amt
  }
  
  //stop if there are no more denominations to iterate over
  if(currentIndex === denominations.length) {
  	return 0;
  }
  
  let numPossibilities= 0;
  let  currentCoin= denominations[currentIndex];
  
  while(amountLeft >=0) {
  	numPossibilities += makingChange(amountLeft, denominations, 			     currentIndex +1);	
    amountLeft -= currentCoin;
  }
	return numPossibilities;
}

console.log(makingChange(4, [1,2,3]))