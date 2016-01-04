//Given a schedule and an integer, find out if any gaps exist in the schedule that are n minuites long, then return a new object with the earliest start time possible, and an end time that is n minutes after the start time.

//**Bonus** Add the object at the appropriate index in the array 

// [ { what: 'Daily Sync',
//     start: Thu Feb 04 2016 09:30:00 GMT-0800 (PST),
//     end: Thu Feb 04 2016 10:00:00 GMT-0800 (PST) },
//   { what: '1:1',
//     start: Thu Feb 04 2016 11:30:00 GMT-0800 (PST),
//     end: Thu Feb 04 2016 12:30:00 GMT-0800 (PST) },
//   { what: 'Important Meeting',
//     start: Thu Feb 04 2016 13:30:00 GMT-0800 (PST),
//     end: Thu Feb 04 2016 14:30:00 GMT-0800 (PST) },
//   { what: 'Daily Sync',
//     start: Fri Feb 05 2016 09:30:00 GMT-0800 (PST),
//     end: Fri Feb 05 2016 10:00:00 GMT-0800 (PST) },
//   { what: 'Important Meeting',
//     start: Fri Feb 05 2016 13:30:00 GMT-0800 (PST),
//     end: Fri Feb 05 2016 14:30:00 GMT-0800 (PST) },
//   { what: 'Daily Sync',
//     start: Sat Feb 06 2016 09:30:00 GMT-0800 (PST),
//     end: Sat Feb 06 2016 10:00:00 GMT-0800 (PST) },
//   { what: 'Important Meeting',
//     start: Sat Feb 06 2016 13:30:00 GMT-0800 (PST),
//     end: Sat Feb 06 2016 14:30:00 GMT-0800 (PST) },
//   { what: 'Daily Sync',
//     start: Sun Feb 07 2016 09:30:00 GMT-0800 (PST),
//     end: Sun Feb 07 2016 10:00:00 GMT-0800 (PST) },
//   { what: 'Daily Sync',
//     start: Mon Feb 08 2016 09:30:00 GMT-0800 (PST),
//     end: Mon Feb 08 2016 10:00:00 GMT-0800 (PST) } ]


require('locus');

function findGap(schedule, mins) {
	var newEvent = {};
	for ( var i = 0 ; i < schedule.length - 1 ; i++ ) {
		var gap = ( schedule[i+1].start - schedule[i].end ) / 60000;
		//gap found
		if ( gap >= mins ) {
			newEvent.start = schedule[i].end;
			newEvent.end = new Date( Date.parse(schedule[i].end) + ( mins * 60000 ));
			//insert into schedule
			schedule.splice(i+1,0,newEvent);
			return newEvent;
		}
	}
	//no gap
	newEvent.start = schedule[schedule.length - 1].end;
	newEvent.end = new Date( Date.parse(schedule[schedule.length - 1].end) + ( mins * 60000 ));
	//append to schedule
	schedule.push(newEvent);
	return newEvent;
}

var schedule = [
	{
		what: "Daily Sync",
		start: new Date(2016,1,4,9,30,0),
		end: new Date(2016,1,4,10,0,0)
	},
	{
		what: "1:1",
		start: new Date(2016,1,4,11,30,0),
		end: new Date(2016,1,4,12,30,0)
	},
	{
		what: "Important Meeting",
		start: new Date(2016,1,4,13,30,0),
		end: new Date(2016,1,4,14,30,0)
	},
	{
		what: "Daily Sync",
		start: new Date(2016,1,5,9,30,0),
		end: new Date(2016,1,5,10,0,0)
	},
	{
		what: "Important Meeting",
		start: new Date(2016,1,5,13,30,0),
		end: new Date(2016,1,5,14,30,0)
	},
	{
		what: "Daily Sync",
		start: new Date(2016,1,6,9,30,0),
		end: new Date(2016,1,6,10,0,0)
	},
	{
		what: "Important Meeting",
		start: new Date(2016,1,6,13,30,0),
		end: new Date(2016,1,6,14,30,0)
	},
	{
		what: "Daily Sync",
		start: new Date(2016,1,7,9,30,0),
		end: new Date(2016,1,7,10,0,0)
	},
	{
		what: "Daily Sync",
		start: new Date(2016,1,8,9,30,0),
		end: new Date(2016,1,8,10,0,0)
	}
];

// eval(locus);

console.log(findGap(schedule,100));