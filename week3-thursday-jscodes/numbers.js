let numbers = [1, 4, 6, 9, 12, 3, 90, 65];
function firstElement(arr) {
	return arr[0];
}
function lastElement(arr) {
	return arr[arr.length - 1];

}
console.log(firstElement(numbers));
console.log(lastElement(numbers));

numbers.push(73);
let newArr = ['a', 'b', 'c']
numbers.unshift(newArr);

function firstItem(arr) {
	return arr[0][0];
}

console.log(firstItem(numbers));