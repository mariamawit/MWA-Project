'use strict';
window.onload = function (){
	//Select all the list items on the page and convert them to array
	const items = Array.from(document.querySelectorAll('[data-time]'));
	console.log(items);

	// Filter for only the elements that contain the word ECMA6
	const word = items.filter((x)=>x.innerHTML=="ECMA6 Video");
	console.log(word);

	// Map down to a list of time
	const time = word.map((x)=>x.getAttribute('data-time'));
	console.log(time);

	// map to an array of seconds
	var secList = time.map((x)=>(parseInt(x.split(":")[0]*60)) + parseInt(x.split(":")[1]));
	console.log(secList);

	//Reduce to get total time
	var total = secList.reduce((x,y)=>x+y);
	console.log(total);
}
