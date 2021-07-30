function timeSinceMidnight() {
	let currentTime = new Date();
	let lastMignight = new Date(new Date().setHours(0,0,0,0));
	let test = lastMignight.toLocaleTimeString;
	let difference = Math.floor((currentTime - lastMignight) / (1000 * 60));
	console.log(`${difference} minutes passed since midnight`);
}

timeSinceMidnight();