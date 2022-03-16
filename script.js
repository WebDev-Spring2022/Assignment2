let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
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
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
