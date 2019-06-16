function longestWord(sen) {
	var words = sen.split(" ");
	// zin wordt in woorden gesplitst in een array
	var longest = "";
	// langste woord, nu leeg
	for (var word of words) {
		if (word.length > longest.length) longest = word;
		// is het woord langer dan het tot nu toe langste woord dan word het woord het nieuwe longest
	}
	return longest;
}
