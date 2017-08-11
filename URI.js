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
		var aa = 'test text';		
		var enc_table =[['%20'," "],['%21','!'],['%24','$'],['%28','('],['%29',')'],['%2a','*'],['%25', '%']]; 
		var decode = function(acc,v){
			var patt = new RegExp(v[0],'g');
			return acc.replace(patt,v[1]);
		};

		for(var i in input){
			console.log(enc_table.reduce(decode, input[i]));
		}
	});
})();
