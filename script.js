const container = document.getElementById('spreadsheet-conatiner');



const columHeaderRow = document.createElement('div');
for(let i = 0; i<=20; i++){
     const cell = document.createElement('div');
     cell.className = "cell"
     cell.classList.add("header-cell")
     cell.innerText =  i
    //  cell.style.backgroundColor = "red"
    columHeaderRow.append(cell);
}
container.append(columHeaderRow);


// rows and columns: 20*26: 
 count = 1
for(let row = 1; row<=26; row++){
    const newRow = document.createElement('div');
    newRow.id = "row"+row
    const rowHeader = document.createElement('div');
    rowHeader.className = "cell"
    rowHeader.classList.add("header-cell")
    rowHeader.innerText =  String.fromCharCode(64+row)
    newRow.append(rowHeader);

    
    // newRow.style.display = "contents"
    // newRow.style.display = "flex"


    for(col = 1; col<=20; col++){
        const newCol = document.createElement('div');
        newCol.className = "cell"
        // newCol.innerText =  `12`
        newCol.setAttribute('contenteditable', 'true');
        newCol.addEventListener('click', handleCellClick)
        newRow.append(newCol);
    }

    container.append(newRow);

}




// selecting multiple cells:

// array = []

let selectedCells = new Set() 


function handleCellClick(event){
    console.log(event)
   let targetCell = event.target;

   if(!event.ctrlKey  && !event.metaKey){
    //   selectedCells.clear()
    selectedCells.forEach(cell =>{
          cell.classList.remove('selected-cell')
    })
    selectedCells.clear()
   }

   else if(selectedCells.has(targetCell)){
       targetCell.classList.remove('selected-cell')
       selectedCells.delete(targetCell)
   }

   else{ 
       targetCell.classList.add('selected-cell')
       selectedCells.add(targetCell)
   }


}


// let boldBtn = document.getElementById('bold')


// boldBtn.addEventListener("click", function(){
   
// })


function makeBold(){
    selectedCells.forEach(cell => {
         cell.style.fontWeight = cell.style.fontWeight === "bold" ? "normal" : "bold"
    })
}



let inputColor = document.getElementById('text-color')

inputColor.addEventListener('change', ()=>{
     selectedCells.forEach(cell => {
        cell.style.color = inputColor.value
     })
})