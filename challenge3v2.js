// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.


//cleaner version
const convertCode = (in1,in2,in3)=>{
	if(typeof in1==='string'){
		return hexToRGB(in1);
	}else{
		return rgbToHex(in1,in2,in3);
	}
};

const hexToRGB = hex=>{
	let intro = `Converting HEX ${hex}`
	hex = hex.replace('#','');
	let rgbCode ={
		r:parseInt(hex.substring(0,2), 16),
		g:parseInt(hex.substring(2,4), 16),
		b:parseInt(hex.substring(4,6), 16),
	};	
	return (`${intro} to RGB(${rgbCode.r},${rgbCode.g},${rgbCode.b})`);

};

const rgbToHex = (r,g,b)=>{
	let intro = `Converting RGB(${r},${g},${b})`
		r = r.toString(16);
		r = r.length===1 ? 0+r : r;
		g = g.toString(16);
		g = g.length===1 ? 0+g : g;
		b = b.toString(16);
		b = b.length===1 ? 0+b : b;
		return (`${intro} to HEX #${r}${g}${b}`);
};

console.log(convertCode(220,1,252));
console.log(convertCode('#dc01fc'));