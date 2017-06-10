(function(){

	var input = [];

	var readline = require('readline');
	var rl = readline.createInterface({
		input : process.stdin,
		output :process.stdout
	});

	rl.on('line',function(line){
		input.push(line.trim());
	});

	rl.on('close',function(){
		
		var cnt = input.shift();

		for(var i in input){

			var corrupt_bits = input[i].split('').map(function(v){return parseInt(v);});
			var p1 = corrupt_bits[0];
			var p2 = corrupt_bits[1];
			var p4 = corrupt_bits[3];
			var b3 = corrupt_bits[2];
			var b5 = corrupt_bits[4];
			var b6 = corrupt_bits[5];
			var b7 = corrupt_bits[6];

			var p1_i = check_integrity(p1,b3,b5,b7);
			var p2_i = check_integrity(p2,b3,b6,b7);
			var p4_i = check_integrity(p4,b5,b6,b7);


			if((p1_i==true) && (p2_i==true) && (p4_i==false)){// p4 == false
					corrupt_bits[3] = convert(corrupt_bits[3]);

			}else if((p1_i==true) && (p4_i==true) && (p2_i==false)){// p2 == false
					corrupt_bits[1] = convert(corrupt_bits[1]);

			}else if((p2_i==true) && (p4_i==true) && (p1_i==false)){ // p1 == false
					corrupt_bits[0] = convert(corrupt_bits[0]);

			}else if ((p1_i==false) && (p2_i==false) && (p4_i==true)){ // b3 error
					corrupt_bits[2] = convert(corrupt_bits[2]);

			}else if ((p1_i==false) && (p4_i==false) && (p2_i==true)){ // b5 error
					corrupt_bits[4] = convert(corrupt_bits[4]);

			}else if ((p2_i==false) && (p4_i==false) && (p1_i==true)){ // b6 error
					corrupt_bits[5] = convert(corrupt_bits[5]);

			}else if((p1_i==false) && (p2_i==false) && (p4_i==false)){ // b7 error
					corrupt_bits[6] = convert(corrupt_bits[6]);
			}


			console.log(''+corrupt_bits[2]+corrupt_bits[4]+corrupt_bits[5]+corrupt_bits[6]);
		}


		function check_integrity(p,a,b,c){
			
			var pa =1;
			if((a+b+c)%2 == 0)
				pa = 0;
	
			if(pa == p)
				return true;
			else
				return false;
		}

		function convert(num){
			return (!num) & 1;
		}


	});

})();
