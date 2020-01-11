function movingShift(s, shift) {
	if (s.length == 0 || s == null) {
		return ["", "", "", "", ""];
	}

	const chunk = Math.ceil(s.length / 5);
	// console.log(`chunk is ${chunk}`);
	let arr = [];
	let ciphered = "";
	let newShift = shift;
	let char;

	[...s].forEach(c => {
		char = shiftChar(c, newShift);
		ciphered = ciphered.concat(char);
		newShift++;
		// console.log(`new shift is ${newShift}`);
	});

	// console.log(`ciphered is ${ciphered}`);

	let start = 0;
	let end = chunk;

	for (let i = 0; i < 4; i++) {
		// console.log(`start s ${start} end is ${end}`);
		arr = arr.concat(ciphered.slice(start, end));
		// console.log(ciphered.slice(start, end));
		start += chunk;
		end += chunk;
		// console.log(arr);
	}

	arr = arr.concat(ciphered.slice(start));
	// console.log(arr);
	return arr;
}

function demovingShift(arr, shift) {
	let str = "";
	let unshift = shift;

	arr.forEach(s => {
		str = str.concat(s);
		console.log(str);
	});
	let char = "";
	let deciphered = "";
	[...str].forEach(c => {
		char = unshiftChar(c, unshift);
		console.log(char);
		deciphered = deciphered.concat(char);
		unshift++;
	});
	str = deciphered;
	console.log(`str is ${str}`);
	return str;
}

function shiftChar(c, shift) {
	let code = c;
	// console.log(`c is ${c}`);
	const start = c.charCodeAt(0);
	// console.log(`start is ${start}`);
	let shifted = start + shift;

	if (start > 64 && start < 91) {
		let mod = shifted % 26;
		if (mod >= 13) {
			mod += 52;
		} else {
			mod += 78;
		}
		code = String.fromCharCode(mod);
	} else if (start > 96 && start < 123) {
		let mod = shifted % 26;
		if (mod >= 19) {
			mod += 78;
		} else {
			mod += 104;
		}
		code = String.fromCharCode(mod);
	}

	// console.log(`code is ${code}`);
	return code;
}

function unshiftChar(c, unshift) {
	let code = c;
	const start = c.charCodeAt(0);
	let shifted = start - unshift;
	console.log(`
    code is ${code}
    start is ${start}
    shifted is ${shifted}
  `);

	if (start > 64 && start < 91) {
		let mod = shifted % 26;
		if (mod >= 13) {
			mod += 52;
		} else {
			mod += 78;
		}
		code = String.fromCharCode(mod);
	} else if (start > 96 && start < 123) {
		let mod = shifted % 26;
		if (mod >= 19) {
			mod += 78;
		} else {
			mod += 104;
		}
		code = String.fromCharCode(mod);
	}

	return code;
}
/****************************************************  */
console.log("demoving");
let a = demovingShift(["B", "c", "D", "e", "F"], 1);
console.log(a);

/* 


First Variation on Caesar Cipher

The action of a Caesar cipher is to replace each plaintext letter with a different
one a fixed number of places up or down the alphabet.
This program performs a variation of the Caesar shift. The shift increases by 1 for
each character (on each iteration).
If the shift is initially 1, the first character of the message to be encoded will be
shifted by 1, the second character will be shifted by 2, etc...
Coding: Parameters and return of function "movingShift"
param s: a string to be coded
param shift: an integer giving the initial shift
The function "movingShift" first codes the entire string and then returns an array
of strings containing the coded string in 5 parts (five parts because, to avoid more
risks, the coded message will be given to five runners, one piece for each runner).
If possible the message will be equally divided by message length between the five
runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing
lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at
most 1 longer. If the last part is the empty string this empty string must be shown
in the resulting array.
For example, if the coded message has a length of 17 the five parts will have lengths
of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1
is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1,
2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the
empty string. If the length is 11, equal parts would be of length 2.2, hence parts
will be of lengths 3, 3, 3, 2, 0.

You will also implement a "demovingShift" function with two parameters
Decoding: parameters and return of function "demovingShift"
1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)
2) an int shift
"demovingShift" returns a string.
Example:
 u = "I should have known that you would have a perfect answer for me!!!"
movingShift(u, 1) returns :
 v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz
wp!!!"]
(quotes added in order to see the strings and the spaces, your program won't write
these quotes, see Example Test Cases)
and demovingShift(v, 1) returns u.
Ref:Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher 


*/
