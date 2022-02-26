//document.getElementById("count-el").innerText=10
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

function increment (){
    count = count+1
    countEl.innerText = count
}

function save(){
   let countStr = count + " - "
   saveEl.textContent += countStr
   count = 0
   countEl.innerText = 0
}