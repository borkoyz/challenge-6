// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]



const input = [1,2,4,591,'zdfg',392,'abc',391,2,5,'1',10,'1',2,'2',1,1,1,'zzzz','3',20,20,'sdfs','sdfsdfff','zzzz','4'];

const output = [];

console.log(`Original Data: ${input}`);

const organizeFN=(dataIn,dataOut)=>{
	//duplicate the array into an obj
	let temp = {
		categories:[],
		arr:[...dataIn], // makes a copy of the array
	};

	//filters through the array finding the typeof eg 'string', number, etc and creates a typeof category into the temp obj
	temp.arr.filter(item=>{
		let itemName = `${typeof item}Arr`;
		//if the category doesnt exist then it will create one
		if(!temp[itemName]){
			temp[itemName] = [];
			//creates a category for the types available within the object
			temp.categories.push({name:`${typeof item}Arr`,type:typeof item});

		}
		//pushes the item into the appropriate category
		temp[itemName].push(item);
	});


	//goes through each category
	temp.categories.forEach(cat=>{
		//sorting
		if(cat.type==='number'){
			temp[cat.name].sort((a, b) => a - b);
		}else{
			temp[cat.name].sort();
		}

		//grouping
		let tempGroup =[];
		let tempFullGroup =[];
		//while the array length is above 0 it will look at the first item and compare it with the next item
		//then will remove the first item and then repeat
		while(temp[cat.name].length>0){
			tempGroup.push(temp[cat.name][0]);
			//once the comparison doesnt match will add to the Full group Array
			if(temp[cat.name][0]!==temp[cat.name][1]){
				//if there was only 1 item then dont group else group eg [1,1,1,1]
				if(tempGroup.length===1){
					tempFullGroup.push(tempGroup[0]);
				}else{
					tempFullGroup.push(tempGroup);
				}
				tempGroup =[];
			}
			//remove the item at index 0 then repeat
			temp[cat.name].splice(0,1);			
		}
		temp[cat.name] = tempFullGroup;
		dataOut.push(...temp[cat.name]);
		console.log(`${cat.type} Data: ${temp[cat.name]}`);
	});

	console.log(`Final Output: ${JSON.stringify(dataOut)}`);
}


organizeFN(input,output);