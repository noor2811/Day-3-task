// Comparison of two object 
let stu1={name:"noorul", age: 10, place:"cdm"};
let stu2={age : 5,name:"ameen"};
if(JSON.stringify(Object.keys(stu1).sort())==JSON.stringify(Object.keys(stu2).sort()))

console.log("Equal");
else
console.log("Given objects is not Equal");