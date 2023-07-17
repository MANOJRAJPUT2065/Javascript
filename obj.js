// let person={
// firstName:'Manoj',
// semister:"1st",
// Age:18
// }
// console.log(person)
let a=5;
let b=10;
//console.log(a++)--->5
// console.log(++a)-->6
// let ans1=(++a)*(--b);
// console.log(ans1);
let age=18;
// let status=(age>=18)?console.log('I can vote'):console.log('i Cannot vote ');
// console.log(age)
// let status=(age>=18)?'I can vote':'i Cannot vote 
// console.log(status)
// let marks=98;
// if(marks>90){
// console.log('A');
// }
// else if(marks>80){
//     console.assertlog('B');
// }
// else if(marks>70){
//     console.log('C');
// }
// else{
//     console.log('Do Hard Work');
// }

//Switch Statement

// let marks=prompt("Enter the marks");
// switch(marks){
// case '90':
//     console.log('A');
//     case '80':
//         console.log('b');
//         break;
// default:
//     console.log("Invalid Number used")
  
//     }

// While loop
// let x=1;
// while(x<=5){
//     console.log(x);
//     x++;
// }
// function Rectangle(){
// this.length=1;
// this.breadth=2;
// this.draw=function(){
//     console.log('Drawings')
// }
// };
// let rectangleobject=new Rectangle();
// console.log(rectangleobject);
// rectangleobject.color="Yellow";
// console.log(rectangleobject);
// let Rectangle={
// length:2,
// width:4
// };
// for(let key in Rectangle){
//     console.log(key,Rectangle[key]);
// }
/*for(let key of Rectangle){
    console.log(key);             --->Rectangle is not iterable
}*/
// for(let key of Object.entries(Rectangle)){
//     console.log(key);             
// }
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
/*let src={
    a:10,
    b:20,
    c:30
};
let dest=Object.assign({},src);

src.a++;
console.log(dest);
let arr=[1,2,34,5,6,7];

/*for(let value of arr){
    console.log(value);
}*/
/*arr.forEach(function(number){
console.log(number);
});*/
/*let numbers=[1,2,-1,-4];
let filtered=numbers.filter(function(value){
return value>=0;
});
console.log(filtered);
*/
let numbers=[7,8,9,5];
let items=numbers.add(function(value){
    return 'student_no.'+value;
})
console.log(items);
