//Fundamentals of JS
// arrays of object 
// function return 
// async js coding 
// forEach map filter find indexOf

//for each
let arr = [1,2,3,4,85,3000];
arr.forEach (function(val) {
    console.log(val*5);
})

//map
let arr2 = [2,4,6,8,10];
let ans = arr2.map(function(val2){
    return val2*2;
})
console.log(ans);

//filter

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let ans2 = arr3.filter(function(val3){
    if(val3 >= 4) {return true;}
    else return false;
    // return val3*2 === 0;
})
console.log(ans2);

//find 

let arr4 = [1,2,3,4,5,6,7,8,9,10];
let ans3 = arr4.find(function(val4){
    return val4 === 5;
})
console.log(ans3);

