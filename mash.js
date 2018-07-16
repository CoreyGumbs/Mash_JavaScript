//Written by Corey Gumbs
//July 13, 2018
//execute program in command line using node.
//ie: >> node mash.js "input1" "input2" "input3" "input4" "input5"

function mash(){
	if((!process.argv[2]) && (!process.argv[3]) && (!process.argv[4]) && (!process.argv[5]) && (!process.argv[6])){
		return "Please enter a home, relationship status, number of kids, a car to drive, and salary amount";
	}else if(!process.argv[2]){
		return "** Please Enter A Place To Live **";
	}else if(!process.argv[3]){
		return "** Please Enter A Number **";
	}else if(!process.argv[4]){
		return "** Please Enter a car of your choice **";
	}else if(!process.argv[5]){
		return "** Please enter a relationship status **";
	}else if(!process.argv[6]){
			return "** Please enter a salary **";
	}else{
		return "You will live in a " + getHome() + ", you are in a " + getRelationship() + " relationship and will have " + getChildrenCount() + " kids, " + "and you will drive a "+ getCar() + ". " + getSalary();
	}
}

function randomizer(x){
	return Math.floor(Math.random() * x);
}

function getHome(){
	const usr_living = process.argv[2];	
	const options = ['Mansion', 'Apartment', 'Shack', 'House', usr_living ];
	let option = options[randomizer(options.length)];
	return option;
}

function getChildrenCount(){
	const randNum = Math.floor(Math.random()*101);
	const usrNum = process.argv[3];
	return Math.random() >= 0.5 ? randNum : usrNum;
}

function getCar(){
	const myCar = process.argv[4]
	const cars = ['Lambo', 'BMW', 'Mercedes', 'Nissan','Honda', 'Hooptie', myCar];
	let car = cars[randomizer(cars.length)];
	return car;
}

function getRelationship(){
	const myRelation = process.argv[5];
	const relationGoals = ['single', 'married', 'divorced', 'complicated', 'an other', myRelation];

	let myGoal = relationGoals[randomizer(relationGoals.length)];
	return myGoal;
}

function getSalary(){
	const mySalary = process.argv[6];
	const salaries = ['unemployed', 'broke', '25,000', '50,000', '100,000', mySalary];
	
	let iMake = salaries[randomizer(salaries.length)];
	if(iMake == 'unemployed' || iMake == 'broke'){
		return "You are " + iMake + ".";
	}else{
		return "Your current salary is $" + iMake  + "." ;
	}
}

console.log(mash());