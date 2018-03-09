//write an array that takes an array of multiple meeting time ranges
//an returns an array of condensed ranges

//Method: Sort meetings by starttime
//go through each meeting comparing the currentMeeting
//and next meeting; merge if ET > next ST
//keep seperate and make currentMeeting = nextM if not

function mergeMeetings(arr) {

  //puts the meetings in order by startTime
  const sortedMeetings= arr.sort(function(a,b) {
  	return a.startTime > b.startTime;
  });
  
  //declare the arr to push into
  let mergedMeetings= [sortedMeetings[0]]
  
  //if currentMeeting endTime > next meeting ST; merge
  //if not, push the next meeting into the array
  for(let i =0; i<sortedMeetings.length; i++) {
  	let currentMeeting= sortedMeetings[i];
    let lastMergedMeeting= mergedMeetings[mergedMeetings.length -1]
   
   if(currentMeeting.startTime<= lastMergedMeeting.endTime) {
   	lastMergedMeeting.endTime= Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
   } else {
   	mergedMeetings.push(currentMeeting);
   }
  }
 return mergedMeetings;
}


module.exports= mergeMeetings;