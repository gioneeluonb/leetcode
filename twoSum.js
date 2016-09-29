var twoSum = function(nums,target){
	console.log(new Date());
	var newArray = [];
	for(var i = 0; i < nums.length;i++){
		newArray.push(target-nums[i]);
		var index = newArray.indexOf(nums[i+1]);
		console.log(newArray,index);
		if(index !== -1){
			console.log(new Date());
			return [index,i+1]
		}
	}

}

console.log(twoSum([0,1,2,4,5,6,4,3,2,4,6,7,8,9,0,3,0],0));