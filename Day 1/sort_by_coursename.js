

'use strict';
var library = [
	{ prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452' },
	{ prof: 'Rakesh shrestha', course: 'WAA', courseID: 'CS545' },
	{ prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425' }
];
			
library.sort(compare);

function compare(x,y){
	if(x.course > y.course)
		return 1;
	else if(x.course < y.course)
		return -1;
	else return 0;
}

console.log(JSON.stringify(library));
