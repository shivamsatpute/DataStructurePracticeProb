let i = 0;
let num = 0;
let randomNumbArr = new Array();


for(i=0; i<10; i++) {
   num = Math.floor(Math.random() * 900) + 100;
   console.log(num);
   randomNumbArr.push(num);
}

console.log(randomNumbArr);

let sortArray = randomNumbArr.sort();
console.log(sortArray);

console.log("Second Smallest Number in the Array: "+sortArray[1]);
console.log("Second Largest Number in the Array: "+sortArray[8]);