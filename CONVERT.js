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
		var fx ={ 
			kg :[2.2046, 'lb'],
			lb :[0.4536, 'kg'],
			g : [3.7854, 'l'],
			l : [0.2642, 'g']
		};

		for(var i=0; i<cnt; ++i){
			var data = input[i].split(' ');
			var unit = data[1];
			var result = (i+1) + ' '  + fx[unit][0]*data[0] + ' ' + fx[unit][1];
			console.log(result);
		}
	});





})();
