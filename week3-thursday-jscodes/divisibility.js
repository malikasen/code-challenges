function divisibility(num){
	if (typeof num === 'number' && num % 3 === 0) {
		return true;
	}
	return false;
}

console.log(divisibility(9) === true);
console.log(divisibility(5) === false);
console.log(divisibility(0) === true);
console.log(divisibility('12') === false);
console.log(divisibility('15') === false);
console.log(divisibility('three') === false);
console.log(divisibility('7') === false);
console.log(divisibility(true) === false);