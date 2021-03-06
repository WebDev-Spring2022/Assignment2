let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid"); //returns the "table"
    let rows = document.getElementsByTagName("tr"); //returns and array of all "tr" elements
    // console.log(rows.length);
    // console.log(grid) 
    // console.log(rows) 
    // if(rows.length > 0)
    //     console.log(rows[0].childElementCount)
    
    // neccessary check if grid hasn't been made yet
    if (rows.length === 0) {
        // console.log("row == 0 happens")
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);

    }

    else{
        // else just make a new row and append new td elements to it
        //  then append that new row to the grid
        let new_row = document.createElement("tr");
        for(r = 0; r < rows[0].childElementCount; r++){
            let new_col_element = document.createElement("td");
            new_col_element.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            // console.log("for loop happens")
            new_row.appendChild(new_col_element)
            // console.log(new_row)
        }
        grid.appendChild(new_row)
    }
}
//Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    // console.log(cols); 

    // neccessary check if grid hasn't been made yet
    if (rows.length === 0) {
        // console.log("row == 0 happens")
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);

    }

    else{
        // else go through each row
        // append a new td element to each row
        for(r = 0; r < rows.length; r++){
            // console.log("for loop happens")
            let new_row_element = document.createElement("td");
            new_row_element.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            rows[r].appendChild(new_row_element)
            // console.log(rows[r])
        }
    }
    
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    // console.log(grid)
    // first, gotta check if there exists children in grid
    //      if there is, then remove the last child (which would be the last row)
    if(grid.childElementCount > 0)
        grid.removeChild(grid.lastElementChild)

}
//Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    // console.log(rows.length)

    // only remove if there's stuff in the grid
    if(grid.childElementCount > 0){

        for(r = 0; r < rows.length; r++){
            rows[r].removeChild(rows[r].lastElementChild)
        }

        // if I remove all the columns the rows still stay (they're just empty)
        // so I check if the user removed all the cells in the first row
        // if the user did then remove all rows
        if(rows[0].childElementCount === 0){
            while(grid.lastElementChild){
                grid.removeChild(grid.lastElementChild)
            }
        }
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let all_cells = document.getElementsByTagName("td"); //gets all td elements

    // just set all td element's color to colorSelected
    for(c = 0; c < all_cells.length; c++){
        all_cells[c].style.backgroundColor = colorSelected
    }
}

function clearAll(){
    let all_cells = document.getElementsByTagName("td"); //gets all td elements
    
    // just set all td element's color to ""
    for(c = 0; c < all_cells.length; c++){
        all_cells[c].style.backgroundColor = ""
    }
}

function fillU(){
    let all_cells = document.getElementsByTagName("td");
    // console.log(all_cells)
    // do only if there are td elements
    if(all_cells.length > 0){
        // loop through each and see if they don't have a color assigned to them
        // if they don't assign the selected one
        for(c = 0; c < all_cells.length; c++){
            // console.log(all_cells[c].style.backgroundColor)
            if(all_cells[c].style.backgroundColor == ""){
                all_cells[c].style.backgroundColor = colorSelected
            }
        }   
    }
}
