(function(){

	var input = [];
	var readline = require('readline');

	var rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	});


	rl.on('line', function(line){
		input.push(line.trim());
	});

	rl.on('close', function(){
		
		var cnt = input.shift();

		for(var i=0; i<cnt; ++i){
			
			var arr = [];
			for(var k=0; k<input[i].length; k=k+2){
				arr.push(input[i][k] + input[i][k+1]);
			}
			arr.sort();
			console.log(arr.join(''));
		}
	});


})();
