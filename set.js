
// obj = {} 

// array = []


// set 


// let s = new Set() 

// s.add(10)
// s.add(20)
// s.add(30)
// // s.add("10") //will not store duplicate values

// // s.delete(10)
// s.clear()
// console.log(s, typeof s) 


// console.log(s.has(110)) 

// // for(let t of s){
// //   console.log(t)
// // }


// let arr = [10,20,30,10,20,30,10]

// let s = new Set(arr)
// let arr1 = [...s]
// console.log(arr1)

let str = "madmamdmamdmamd"

let s = new Set(str)

let s2 = ""
for(let t of s){
   s2 = s2+t
}

console.log(s2)


