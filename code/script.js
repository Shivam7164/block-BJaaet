function main(){

    
let text = document.querySelector("[type=text]")
let rootEle = document.querySelector("ul")

let allData = []

function handleInput(event){
   let value = event.target.value;
if(event.keyCode === 13 && value !== ""){
   let todo = {
       name : value,
       watched :false,
   }
   event.target.value=""
   allData.push(todo)
   createUI()
}
}

function handleDelete(event){
 let id = event.target.dataset.id;
 allData.splice(id , 1)
 createUI()
}

function handlecheck(event){
let id = event.target.dataset.id;
allData[id].watched = !allData[id].watched;
createUI()
}

function createUI(){
   rootEle.innerHTML=""
   allData.forEach((data ,index) =>{
       let li = document.createElement("li")

       let input = document.createElement("input")
       input.type = "checkbox";
       input.setAttribute("data-id", index)
       input.checked = data.watched;
       input.addEventListener("input", handlecheck)

       let p = document.createElement("p")
       p.innerText = data.name

       let span = document.createElement("span")
       span.setAttribute("data-id" , index)
       span.addEventListener("click" , handleDelete)
       span.innerText = "X"

       li.append(input, p, span)
      rootEle.append(li)
   }) 
}

text.addEventListener("keyup" , handleInput)

}

main()