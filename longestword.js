function fnLongestWord(string) {
	var str = document.getElementById("input").value || string;
	var words = str.split(" "); // zin wordt in woorden gesplitst in een array
	var longest = words.sort((a, b) => {
		return b.length - a.length; //verglijkt elke woord en kijkt welke het langst is
	});
	document.getElementById("showResult1").innerHTML = //stuurt het naar html
		"Het langste woord: " + longest[0];
}
