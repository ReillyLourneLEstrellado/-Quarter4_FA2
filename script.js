function generateTable() {
    let multiplier = document.getElementById("multiplier").value;
    let maxMultiplicand = document.getElementById("maxMultiplicand").value;
    let table = document.getElementById("myTable");
    table.innerHTML = ""; 

    if (multiplier < 2 || multiplier > 10) {
        alert("Please enter a number between 2 and 10 for the multiplier.");
        return;
    }
    if (!maxMultiplicand || maxMultiplicand < 1) {
        alert("Please enter a valid number (greater than 0) for the max multiplicand");
        return;
    }

    let headerRow = table.insertRow();
    headerRow.insertCell().textContent = "x"; 

    for (let i = 1; i <= maxMultiplicand; i++) {
        let cell = headerRow.insertCell(); 
        cell.textContent = i;
    }


    for (let i = 1; i <= multiplier; i++) {
        let row = table.insertRow();
        let firstCell = row.insertCell();  
        firstCell.textContent = i;

        for (let j = 1; j <= maxMultiplicand; j++) {
            let cell = row.insertCell(); 
            cell.textContent = i * j;
        }
    }
}
