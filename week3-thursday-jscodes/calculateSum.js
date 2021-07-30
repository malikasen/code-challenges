// O(n)
function calculateSum(num) {
	if (num === 0) {
		return 0;
	}
	return num + calculateSum(num - 1);
}

console.log(calculateSum(0));
console.log(calculateSum(1));
console.log(calculateSum(3));
console.log(calculateSum(10));