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

		var cnt = input.shift();
		if(cnt<1 || cnt>10000)
			return;

		for(var i=0; i<cnt ; i++){
			var e = convertEndian(input[i]);
			console.log(e.toString());
		}

	});

	function convertEndian(big_e10_str){

		var big_e10 = parseInt(big_e10_str);

		var _1 = makeToXXformat(
					(((big_e10 & 0xff000000)>>>0).toString(16)).slice(0,-6)
				); // '>>>0' is  to unsigned int
		var _2 = makeToXXformat((big_e10 & 0x00ff0000).toString(16).slice(0,-4));
		var _3 = makeToXXformat((big_e10 & 0x0000ff00).toString(16).slice(0,-2));
		var _4 = (big_e10 & 0x000000ff).toString(16);

		var lit_e10 = parseInt('0x' + _4 + _3 + _2 + _1);	
		return lit_e10

		function makeToXXformat(str){
			
			switch(str.length){
				case 0:
					return '00'
				case 1:
					return '0' + str;
				default:
					return str;
			}
		}

	}

})();
