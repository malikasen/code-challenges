function common(a, b) {
	if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
		return true;
	}
	return false;
}

console.log(common([1, 2, 3], [7, 3]));
console.log(common([1, 2, 3], [7, 3, 2]));
console.log(common([1, 2, 3], [1, 3]));