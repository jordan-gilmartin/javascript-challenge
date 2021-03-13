// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        
    });
    
});