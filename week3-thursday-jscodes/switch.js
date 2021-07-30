
function sleep_in(weekday, vacation) {
	switch (weekday | vacation){
		case true | false:
			return false;
		case false | false:
		case false | true:
			return true;
	}
}

console.log(sleep_in(true, false));
console.log(sleep_in(false, false));
console.log(sleep_in(false, true));