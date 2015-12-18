function Vehicle(make,model,year){
	this.make = make;
	this.model = model;
	this.year = year;
}

function Car(make,model,year) {
	Vehicle.call(this,make,model,year);
	//or:
	Vehicle.apply(this,arguments);
}