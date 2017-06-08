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

		var cnt = input.shift() * 3 ;
		for(var i=0; i<cnt; i=i+3 ){
			var a = input[i].split(' ');
			var b = input[i+1].split(' ');
			var c = input[i+2].split(' ');

			console.log(findCoord(a[0],b[0],c[0]) + ' ' +  findCoord(a[1],b[1],c[1]));
		}

	});

	function findCoord(a,b,c){
		
		if(a == b){
			return c;
		}else if (b == c){
			return a;
		}else{
			return b;
		}
		
	}

})();
