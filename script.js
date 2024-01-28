function appendToTable() {
    var table = document.getElementById("datatable");
    var newRow = table.insertRow(table.rows.length);

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foodChoices = document.querySelectorAll('input[name="food"]:checked');
    var foodValues = Array.from(foodChoices).map(choice => choice.value);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);


    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foodValue.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;
    cell9.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    clearForm();
}


function clearForm(){
    document.getElementById("myForm").reset();
}


function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}