// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.

//cluttered version also detects only strings
const convertColor = inputCode=>{

	let codeType = detectCode(inputCode);
	let conversionType = '';
	let conversion;
	let colCode=inputCode;

	if(codeType ==='hex'){
		conversionType = 'RGB';
		colCode = colCode.charAt(0)==='#' ? colCode.substring(1,7) : colCode.substring(0,6);
		let rgbCode ={
			r:parseInt(colCode.substring(0,2), 16),
			g:parseInt(colCode.substring(2,4), 16),
			b:parseInt(colCode.substring(4,6), 16),
		};
		
		conversion =`rgb(${rgbCode.r},${rgbCode.g},${rgbCode.b})`;
	}else if(codeType ==='rgb'){
		conversionType = 'HEX';
		let hexCode = colCode.split(',',3);
		hexCode.forEach((item,i)=>{
			let hex = parseInt(item).toString(16)
			hexCode[i] = hex.length===1 ? 0+hex : hex;
		});
		conversion =`#${hexCode[0]}${hexCode[1]}${hexCode[2]}`;
	}

	console.log(`Code entered ${inputCode}, detected '${codeType} ${codeType==='hex'?'#':''}${colCode}' coverting to '${conversionType}' = ${conversion} `);
}

const detectCode = colorCode =>{
	if(colorCode.charAt(0)==='#'){
		return 'hex';
	}else{
		return 'rgb';
	}
};

convertColor('220,1,252');
convertColor('#dc01fc');



