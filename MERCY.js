(function(){

	var input = [];

	var readline = require('readline'); 
	
	var r = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	});

	r.on('line',function(line){
		input.push(line.trim());
	});

	r.on('close',function(){
		for(var i in input){
			var cnt = input[i];
			if(cnt<=10){ 
				for(var i=0; i<cnt; i++){
					console.log('Hello Algospot!');
				}
			}
		}
	});
		
})();

