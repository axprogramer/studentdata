///Save Data
var studentArray = [];
var seletIndex = -1;
function init(){
    if (localStorage.myRecord){ ///You can rename "myRecord" to other name for localdata save
        document.getElementsByTagName('tbody').innerHTML = "";
        studentArray = JSON.parse(localStorage.myRecord);
        for(var i=0; i<studentArray.length; i++){
            prepareTableCell(i,studentArray[i].name,studentArray[i].sex, studentArray[i].grade);
            
        }
    }
}
var selectedRow = null
//input data to table
function bTn(data) {
    // Identify the id
    let name = document.getElementById("fullName").value;
    let sex = document.getElementById("sex").value;
    let grade = document.getElementById("grade").value;
    let index = document.getElementById("student").value;
    let update = document.getElementById("student").value;

    // Reset code
    document.getElementById("fullName").value = "";
    document.getElementById("sex").value = "";
    document.getElementById("grade").value = "";
    selectedRow = null;

    //Save Data
    let stuObj = {name:name,sex:sex,grade:grade};
    if (seletIndex == -1){
        studentArray.push(stuObj);
    } else{
        studentArray.splice(seletIndex, 1, stuObj);
    }
    
    // Add new information
   prepareTableCell(index,name,sex,grade,update);
    //Store the Data
    localStorage.myRecord = JSON.stringify(studentArray);

}
//insert cell
function prepareTableCell(index,name,sex,grade,update){
    var table = document.getElementById("student").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = sex;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = grade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML =
    '<button onClick="onEdit(this)">Edit</button><button onClick="onDelete('+index+')">Delete</button><button onClick="update('+update+')">Update</button>';
}
// Delete information
function onDelete(index) {
    if (confirm('Are you sure to delete this record ?')) {
        //row = index.parentElement.parentElement;
        document.getElementById("student").deleteRow(index+1);
        studentArray.splice(index, 1);
        localStorage.myRecord = JSON.stringify(studentArray);
              

    }
}

// edit information
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sex").value = selectedRow.cells[1].innerHTML;
    document.getElementById("grade").value = selectedRow.cells[2].innerHTML;
}

function update(){
        // Identify the id
        let name = document.getElementById("fullName").value;
        let sex = document.getElementById("sex").value;
        let grade = document.getElementById("grade").value;

        // Update information
        selectedRow.cells[0].innerHTML = name;
        selectedRow.cells[1].innerHTML = sex;
        selectedRow.cells[2].innerHTML = grade;
            
}

