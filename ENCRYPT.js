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
			var str_arr = input[i].split('');	
			var r_arr = str_arr.reduce(extractNum, [[],[]]);
			console.log(r_arr[1].join('') + r_arr[0].join(''));
		}

		function extractNum(arr, val, i){
			if(i%2)
				arr[0].push(val);
			else
				arr[1].push(val);

			return arr;
		}
	});
})();
