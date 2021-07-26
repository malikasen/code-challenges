// Write a function that prints whether a number is between 0 and 50 (inclusive), 
// between 51 and 100 (inclusive), greater than 100, or less than 0.

// Example: 25 is between 0 and 50

function numbers(num) {
	if (typeof num != 'number') {
		throw new Error('function \'numbers\' accepts only number parameters')
	}
	if (num >= 0 && num <= 50) {
		console.log('The number is ' + num + ' and it is between 0 and 50');
	} else if (num >= 51 && num <= 100) {
		console.log('The number is ' + num + ' and it is between 51 and 100');
	} else if (num > 100) {
		console.log('The number is ' + num + ' and it is greater than 100');
	} else {
		console.log('The number is ' + num + ' and it is less than 0');
	}
};

numbers(-50); 
numbers(45);
numbers(74);
numbers(200);
numbers("50");