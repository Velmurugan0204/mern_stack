

//Spread Operator


// const obj1={
//     name:"abc",
//     age:"12"
// }
// const obj2={
//     name:"def",
//     age:"15"
//     // address:"coimbatore"
// }
// const obj3={...obj1,...obj2};
// console.log(obj3);



// const arr1=[1,2,3];
// const arr2=[3,4,5];
// const arr3=[...arr1,...arr2];
// console.log(arr3);
// const arr4=arr3;
// console.log(arr4);

// function sum(f,...abc){
//     console.log(abc);
// }
// sum(1,2,3,4,5);


//Rest operator



// function sum(...numbers){
//    console.log(numbers);
// }
// sum("hello",1,2,3,4,5);




// function sum(a,numbers){
//    console.log(a,numbers);
// }
// const obj1={
//     name:"abc",
//     age:"12"
// }
// const obj2={
//     name:"def",
//     age:"15"
//      //address:"coimbatore"
// }

// sum(obj1,obj2);




// function sum(...numbers){
  
//     for(let i=1;i<numbers.length;i++){
//         numbers[i]=numbers[0]*numbers[i];
//     }
//     numbers[0]*=numbers[0];
    
//     return numbers;
// }
// let a=sum(2,3,4,5,6);
// console.log(a);


//Destructuring assignment



// const obj1={
//     name:"abc",
//     age:"12"
// }
// const obj2={
//     name:"def",
//     age:15,
//     address:{city:"coimbatore",
//                street:"dsfd",
// }
// }

// function func({...abc}){
//     console.log(abc.name,abc.age,abc.address.city,abc.address);

// }

// var {...s}=obj1;
// func(obj2);


// function func(a){
    
//     console.log(a);
// }




// callback function


// function func2(r,a,b,c,){
//    var k;
//     if(c=="+") k=a+b;
//    else if(c=="-") k=a-b;
//    else if(c=="*")k=a*b;
//    else k=a/b;
//   r(k);
// }
// let a=3,b=5,c='*';
// func2(func,a,b,c);


// function func(r,a,b,c){
//     r(a,b,c);
    
// }

// function func2(a,b,c,){
//    var k;
//     if(c=="+") k=a+b;
//    else if(c=="-") k=a-b;
//    else if(c=="*")k=a*b;
//    else k=a/b;
//  console.log(k);
// }
// let a=3,b=5,c='*';
// func(func2,a,b,c);





// const obj1={
//     name:"abc",
//     age:"12"
// }
// const obj2={
//     name:"def",
//     age:15,
//     address:{city:"coimbatore",
//                street:"dsfd",
//              }
// }

// function func({...obj},a){
//     a(obj.address);
// }

// function func1({city}){
//     console.log(city);
// }
// func(obj2,func1);



// function func(r,...k){
//   var arr=[],j=0;
//   for(let i=0;i<k.length;i++){
//     if(k[i]%2==0){arr[j]=k[i];j++;}
//   }
   
//     r(arr);
// }
// function func1(arr1){
//   console.log(arr1);
// }

// func(func1,1,2,4);





//Promises

function func(){
    return new Promise((resolve, reject) => {
        var data=2;
        resolve(data);
    });
}
func().then(data=>{
    console.log("Success: ",data);

}).catch(error=>{
    console.log("Error: ",error);
});

