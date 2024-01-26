function onesDigit(n) {
  // your code here

	// return n[n.length-1]
	let digit = n % 10;
	return digit;
}
// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));