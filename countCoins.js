//updating answer to include memoization

/*function Change() {
  //container to keep used nums
  this.memo= {};
}

Change.prototype.makingChange= function(amountLeft, denominations, currentIndex) {
    currentIndex= (typeof currentIndex !== 'undefined')? currentIndex : 0;

    //check memo and return value if we got a solution previously
    const memoKey= [amountLeft, currentIndex].join(', ');
    if(this.memo.hasOwnProperty(memoKey)) {
      return this.memo.memoKey;
    }

    //set base cases

    if(amountLeft === 0) {
      return 1;
    }

    //current combination of denoms do not work
    if(amountLeft< 0) {
      return 0;
    }

    // no more denominations to go through!
    if(currentIndex === denominations.length) {
      return 0;
    }

    const currentCoin= denominations[currentIndex];
    let numPossibilities= 0;

    //recursive loop
    while(numPossibilities >=0) {
      numPossibilities+= this.makingChange(amountLeft,denominations, currentIndex +1);
      amountLeft-= currentCoin;
    }

    //save the answer in the memo so we can bypass it later
    this.memo[memoKey]= numPossibilities;
    return numPossibilities;    

}

module.exports= Change.makingChange;*/

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

module.exports= makingChange;