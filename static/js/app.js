// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row 'tr' for each ufos object
tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
        // Append a cell to the row for each value in the ufos object
        var cell = row.append("td");
        cell.text(value);        
    });    
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handler
button.on("click", filterTable);

// Complete event handler function
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = d3.select(".form-control").property("value");
    
    var filteredData = tableData.filter(dt => dt.datetime === inputValue);
    // console.log(filteredData);

    // Clear existing output
    tbody.html("");
    
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            // Append a cell to the row for each value in the ufos object
            var cell = row.append("td");
            cell.text(value);        
        });    
    });
    
};

