
console.log("external js");



// let d=new Date(2023,12)
// console.log(d)

// let d=new Date(2023,1,3)
// console.log(d)



// let d=new Date(2023,1,3,10)
// console.log(d)

// let d=new Date()
// console.log(d.getMonth())



// let d=new Date()
// d.setTime(18816993335709)
// console.log(d)

// const date =new Date()
// const localString= date.toLocaleString()
// console.log(date)
// console.log(localString)


// const dateString="2024-05-29T14:48:09.831Z"
// const parsedDate=Date.parse(dateString);
// console.log(parsedDate)
// console.log(new Date(dateString).getTime())


// const dateString="2024-05-29T14:48:09.831Z"
// let date=new Date(dateString).getDate()
// console.log(date)
// console.log(new Date(dateString).toLocaleString())
// date=date+3;
// let new_date=new Date(dateString).setDate(date)
// console.log(new Date(new_date).toLocaleString())



// let date=new Date(12000)




// console.log(date)

// // let timestring=1970-01-01T00:00:12.000Z
// // let time=new Date("Thu Jan 01 1970 00:00:00 GMT+0530").toLocaleTimeString()
// // console.log(time)
// time2=new Date("Thu Jan 01 1970 00:00:00 GMT+0530").setSeconds(2)
// time2=new Date(-19798000)
// console.log(time2)


// const t= setTimeout(() => {
//     console.log("hello")
    
// }, 1000);

// clearTimeout(t)

// const t= setInterval(() => {
//     console.log("hello")
    
// }, 1000);

// // clearInterval(t)

// const detail ={
//     name:"AKshat",
//     age:18,
//     "se'x":"M",
//     "sex":"M"
//     ,
//     greet:()=>{
//         // console.log("hello")
//         return 0
//     }
// }

// console.log(detail)
// console.log(detail.name)
// console.log(detail["se'x"])
// console.log(detail.sex)
// console.log(detail["age"])
// console.log(detail.greet())
// console.log(detail.greet)




// let idType = "studentId";

// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(


//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`

//     //   as idtype="studentId" , we can write ${student[idType]} instead of  ${student["studentId"]}
//     //   `Hey, my ${idType} is ${student["studentId"]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();



// let a =10
// let b =16;
// console.log(`before swap \n a=${a}\nb=${b}`)
// [a, b]=[b, a];

// console.log(`after swap \n a=${a}\nb=${b}`)

// let a = 5;
// let b = 10;

// console.log("Before swapping:");
// console.log("a =", a);
// console.log("b =", b);

// [a, b] = [b, a];

// console.log("After swapping:");
// console.log("a =", a);
// console.log("b =", b);



// const swap=({a,b})=>{
//     obj={a,b}
//     c=obj.a
//     obj.a=obj.b
//     obj.b=c
// }

// let obj={a:12,b:13}
// swap(obj)
// console.log(obj.a)
// console.log(obj.b)




// const swap=(a,b)=>{
// return [b,a];
// }

// let a=12;
// let b=9;
// [a,b]=swap(a,b);

// console.log(a)
// console.log(b)




// let a=19
// // let b=23
// // a=b
// console.log(a)


// const addsubject=(obj,sub,marks)=>{
//     // console.log(student.grades.Maths)
//     obj.grades[sub]=marks
// }


// let student={
//     name:"Akshat",
//     grades:{
//         Maths:90,
//         Science:81
//     }
// }
// console.log(student)

// addsubject(student,"Physics",56)
// console.log(student)





//    const areObjectsEqual=(objA, objB)=>{
//     if((Object.keys(objA).length)==(Object.keys(objB).length)){
//         let objA_keys =Object.keys(objA);
//         let objB_keys=Object.keys(objB);
//         let objA_values=Object.values(objA)
//         let objB_values=Object.values(objB)
//          for(let i=0;i<objA_keys.length;i++ ){

//             if(!(objA_keys.includes(objB_keys[i])) || !(objA_values.includes(objB_values[i]))){  
//                 return false           
//             }
            
//          }
//     }
//     else{
//         return false
//     }
//     return true
//    }
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(Object.keys(objA).length)

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

// let objA = { name: "Alice", age: 26, city: "New York" };
// console.log(objA[1])

// const areObjectsEqual =(objA, objB)=>{
//     if(JSON.stringify(Object.values(objA))==JSON.stringify(Object.values(objB))){
//         if(JSON.stringify(Object.keys(objA))==JSON.stringify(Object.keys(objB))){
//             return true;
//         }
        
//       }
//       return false;
// }

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" ,};
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

//  console.log(areObjectsEqual(objA, objB)); // Should return true
//  console.log(areObjectsEqual(objA, objC)); // Should return false



// const arrayToObj=(arr)=>{
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//       // console.log(arr[i].id);
//       obj[arr[i].id]=arr[i];
  
  
//     }
//     return obj;
  
//   }

//   let inputArray=[{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 3, name: 'Charlie' }]
// console.log(inputArray)

// console.log(arrayToObj(inputArray));
//  const fun2=()=>{
//     // setTimeout(()=>{
//         console.log("hello 22")
//     // },2000)
//  }
// const fun=()=>{
//     console.log("hello 11")
//     fun2()
//     console.log("hello 33")
// }

// fun()

// console.log(func())

// function func(){
//     return 1234
// }
// let b=11
// const func=()=>{
//     let a=10;
//     if(a==10){
//         let b=12;
//         console.log( a+b);  // return 22 as it takes local b 
//     }
//     let sum=a+b  //sum will have 21 as it take global b {scope chaining concept}
// }
// func();

// const func1=()=>{
//   return 1+3;
// }
// let

// let objA = { name: "Alice", age: 26, city: "New York" }
// // let {name,age}=objA
// let {name:myName,age}=objA
// // console.log(name,age)
// // console.log(age,name)
// console.log(age,myName)

// let arr1=[2,3,4,5,6]
// // let arr2=arr1
// let arr2=[...arr1]
// arr2[0]=99
// console.log(arr1)
// console.log(arr2)

//  let arr1=[5,4,3,2,1]
//  let arr2=[1,22,33,44,1]
//  let arr3=[...arr1,...arr2]
//  console.log(arr3)
// let objA = { name: "Alice", age: 26, city: "New York" }
// let objB=objA
// let objB=Object.assign({},objA)
// console.log(objA)
// console.log(objB)
// objB.name="Akshat"
// console.log(objA)
// console.log(objB)

// let str="akshat .jain"
// let str_arr1=str.split(".")
// console.log(str_arr1)

// let str="KAhsatjain"
// // let str_arr=[...str]
// let str_arr=Array.from(str)
// console.log(str_arr)

// !pad start

// let str="akshat"
// let pad_name=str.padStart(10)
// // let pad_name=str.padStart(10,"@")
// console.log(pad_name)
// // !pad end
// let str="akshat"
// // let pad_name=str.padEnd(10)
// let pad_name=str.padEnd(10,"@")
// console.log(pad_name)

// let objA = { name: "Alice", age: 26, city: "New York" }
// let objB={...objA}
// objB.name="AKhsta"
// console.log(objA)
// console.log(objB)

// const arr=[1,2,[3,5],7]
// const flat=arr.flat()
// console.log(arr)
// console.log(flat)


// const areObjectsEqual=(objA, objB)=>{
//   if((Object.keys(objA).length)==(Object.keys(objB).length)){
//       let objA_entries =Object.entries(objA);
//   let objA_flatEntries=objA_entries.flat();//We conver multidimensnal objA_entries arr to 1-D flat arr using arr.flat()
//       let objB_entries=Object.entries(objB);
//       let objB_flatEntries= objB_entries.flat();
     
//        for(let curr of objA_flatEntries){

//           if(!(objB_flatEntries.includes(curr)) ){  
//               return false           
//           }
          
//        }
//   }
//   else{
//       return false
//   }
//   return true
//  }
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(Object.keys(objA).length)

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

// const areObjectsEqual=(obj1,obj2)=>{
//   let o1=Object.keys(obj1);
//   let o2=Object.keys(obj2);
  
//   if(o1.length!=o2.length){
//     return false;
//   }

//   for(let id in obj1){
//     if(obj1[id]!=obj2[id]){
//       return false;
//     }
//   };

//   return true;

  
//   }
  

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

// let arr=[4,2,6,1]
// arr=arr.with(1,99)

// console.log(arr.with(1,99))
// console.log(arr)
// let a= 10
// let b=3
// let c=5
// console.table([a,b,c])


// console.log(abc())
// let cd=function abc(){
//     return 3
// }
// console.log(cd())
// console.log(abc())
// const NUM=89
// const promised=(NUM)=>{
//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let abc=Math.random()*0.4

//        if (abc>0.3){

//         resolve(
//             "Successfull"
//         )
//        }
//        else{
//         reject("unsuccessful")
//        }
        

//     },2000)
// })
// }
// promised(NUM).then((res)=>{
   
//     console.log(res)
// }).catch((err)=>{
//     // return err
//     console.log('ERROR')
// })



const stuName="akshat jain";
const enrollStudent = (Name)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let numb=400*300
      const isSuccessful=Math.random();
      if(isSuccessful){
        resolve(`Enrollment successful for ${Name}`);
        // resolve(numb)
      }
      else{
        reject(`Enrollment failed for ${Name}. Please try again.`);
        
      }
    },2000);
  });
}

enrollStudent(stuName)
   .then((res)=>{console.log(res);})
   .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Enrollment process completed.");
  });



