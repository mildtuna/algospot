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

		var is_not_weird;
		var delta;

		console.time('weird...');
		for(var i in input){

			var num = parseInt(input[i]);

			var divisors = [];

			var max_div = num/2;
			for(var k=1; k<=max_div; ++k){
				if((num%k) ==0)
					divisors.push(k);
			}

			var sum = divisors.reduce(function(acc,v){return acc+v;}); 

			if(sum <= num){
				console.log('not weird');
				continue;
			}


			delta = sum - num;

			is_not_weird = false;
			check(divisors,0);
			

			if(is_not_weird)
				console.log('not weird');
			else
				console.log('weird');

		}
		console.timeEnd('weird...');

		function check(arr, acc){

				if(is_not_weird)
					return;

				var s_arr = arr.slice();

				for(var k=0; k<arr.length; ++k){
					
					var div_sum = acc + arr[k]	
					if(delta == div_sum){
						is_not_weird = true;
						return;
					}

					if(i == (arr.length-1))
						return;

					s_arr.shift();
					check(s_arr, div_sum); 
				}
		}   

	});

})();
