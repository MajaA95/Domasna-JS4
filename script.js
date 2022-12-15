
//homework 1

function tellStory (name,mood,activity){
    console.log ('This is '+name+'.'+name+' is a nice person. Today the are '+mood
    +'.They are '+activity+' all day')
}
tellStory ('John','happy','playing')

//homework 2


function sum(arr){
    let s=0;
    for (let i=0; i<arr.length; i++){
        s=s+arr[i];
    }
    console.log(s);
}
sum ([1,2,3,4,5])

//homework 4

let nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(let i =0; i<nums.length; i ++){
    if (nums[i]===nums.length+1){
        break;
    }
    console.log(nums[i]);
}

//homework 5
let arrayList = [1, 2, 3, 4, 3, 50, 0];
let max = arrayList[0];
for (let i = 1; i < arrayList.length; ++i) {
  if (arrayList[i] > max) {
    max = arrayList[i];
  }
}

console.log(max);







