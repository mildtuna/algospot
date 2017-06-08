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

		var ston_tbl = {'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,
						'six':6,'seven':7,'eight':8,'nine':9,'ten':10};

		var ntos_table = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five',
						'6':'six','7':'seven','8':'eight','9':'nine','10':'ten'};

		for(var i in input){

			var str_arr = input[i].split(' ');

			var a = ston_tbl[str_arr[0]];
			var b = ston_tbl[str_arr[2]];
			var c ;
			
			switch(str_arr[1]){
				case '+' :
					c = a+b;				
					break;
				case '-' :
					c = a-b;
					break;
				case '*' :
					c = a*b;
					break;
			}

			if(c<0 || c>10){
				console.log('No');
				continue;
			}
			
			var result = ntos_table[c.toString()].split('');
			var val = result.reduce(function(acc,v){ return acc.replace(v,'');},str_arr[4]);	

			if(val === '')
				console.log('Yes');
			else
				console.log('No');

		}

	});

})();
