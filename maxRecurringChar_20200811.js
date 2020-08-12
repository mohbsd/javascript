/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/
// We need to keep track of every character in the string as well as the number of times it exists. !!!


// For…in Iteration

function maxRecurringChar(text) {
    let charMap = {}; //initialize charMap to an empty object
	let maxCharvalue = 0; // is used to store the maximum value yet encountered at the point of every iteration with the for…in loop.
	let maxChar = ''; //is used to store the character with the highest value on every iteration.
	
	for (let chara of text){
	
	if (charMap.hasOwnProperty(chara)) { // For every character, we check if it has been mapped already by calling the .hasOwnProperty() method on the object
		// If it is, we increment its value
		charMap[chara]++;
	} else {
		// Otherwise it is added as a property and its value is set to 1.
		charMap[chara] = 1;
	}
		
}

	for (let chara in charMap){
		if (charMap[chara] > maxCharvalue){
			maxCharValue = charMap[chara]
			maxChar = chara
		}
	}
	
	return maxChar
	
}



function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}





var text1 = maxRecurringChar('mohamedboussaid');
console.log(text1);
