// O(2n)
let arr = [{name: 'apple', color: 'green'},{name: 'mango', color: 'yellow'}]
function mutate(arr) {
	for (let item of arr) {
		console.log(item.color);
	}
	arr[0].color = 'red';
	arr[1].color = 'red-green';
	for (let item of arr) {
		console.log(item['color']);
	}
}


mutate(arr);