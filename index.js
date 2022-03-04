//document.getElementById("count-el").innerText=10
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let sum = document.getElementById("sum")



function increment (){
    count = count+1
    countEl.innerText = count
}

let all = []
function save(){
   all.push(count)
   let countStr = count + " - "
   let sumEnt = all.reduce((acc,el)=>acc+el,0)
   saveEl.textContent += countStr
   count = 0
   countEl.innerText = 0
   sum.textContent = "sum of entries: " + sumEnt
   console.log(sumEnt)
}