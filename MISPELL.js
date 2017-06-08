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

			var data = input[i].split(' ');
			var str = data[1];	
			var num = str.length - parseInt(data[0]);
			var patt = new RegExp('[A-Z](?=([A-Z]{'+ num +'})(?![A-Z]))');
			var result = (i+1) + ' ' + str.replace(patt,'');
			console.log(result);
		}
	});
})();
