(function(){

	var input = [];

	var readline = require('readline');
	var rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	});

	rl.on('line',function(line){
		input.push(line.trim());
	});

	rl.on('close',function(){

		var cnt = input.shift()*2;

		for(var i=0; i<cnt; i+=2){
			var goal = input[i];	
			var total = input[i+1].split(' ').reduce(function(acc,v){return acc + parseInt(v);},0);

			if(goal >= total)
				console.log('YES');
			else
				console.log('NO');
		}
	});

})();
