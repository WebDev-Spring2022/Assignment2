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
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 

    
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
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
