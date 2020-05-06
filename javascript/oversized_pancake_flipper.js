//https://code.google.com/codejam/contest/3264486/dashboard

const fs = require("fs");

function flip(str, idx, k) {
	var flipped = "";
	
	for(var i = 0; i < str.length; i++) {
		if(i >= idx && i < idx + k)
			flipped += str[i] === "+" ? "-" : "+";
		else
			flipped += str[i];
	}
	
	return flipped;
}

function MinFlips(str, k) {
	count = 0;
	
	for(var i = 0; i <= str.length - k; i++) {
		if(str[i] === "-") {
			str = flip(str, i, k);
			count++;
		}
	}
	
	return str.includes("-") ? "IMPOSSIBLE" : count;
}

var caseNum = 1;

try {
	const input = fs.readFileSync("a-large-practice.in", "utf8").split("\n");

	fs.writeFileSync("output.txt", "");

	input.forEach(item => {
		const [s, k] = item.split(" ");
		
		outputLn = `Case #${caseNum++}: ${MinFlips(s,parseInt(k))}\n`;

		fs.writeFileSync("output.txt", outputLn, {flag: "a"});
	});
} catch(err) {
	console.log(err);
}