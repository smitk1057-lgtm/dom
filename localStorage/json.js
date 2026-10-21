let obj={
    a:10,
    b:['apple','mango'],
    c:true,
  //  d:()=>{console.log('hello') }
}
console.log(obj , typeof obj)
let jsonAns=JSON.stringify(obj)
console.log(jsonAns, typeof jsonAns )
 
let obj2=JSON.parse(jsonAns)
console.log(obj2, typeof obj2)
