const num=[1,3,3,2]
let unique=num.filter((curr,index,arr)=>{
   return num.indexOf(curr)==num.lastIndexOf(curr)
  
})
console.log(num)
console.log(unique)