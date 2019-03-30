/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]*/


const numbers = [1,2,3,4,5,6,7,8,9,0];


const findTarget =(nums,target)=>{
	let temp =[];
	nums.forEach((n,i)=>{
		nums.forEach((n2,i2)=>{
			//checks if n+n2 equal the target while not on the same index and not including any repeats
			if((n+n2)===target && i!==i2 && i<i2){
				temp.push([n,n2]);
			}
		});
	});
	console.log(temp);
};

findTarget(numbers,4);

