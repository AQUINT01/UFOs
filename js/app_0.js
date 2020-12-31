// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var ufoData = function () {

}

// 3. Use this function to update the filters. 
function updateFilters() {
  updateFilters();
  filertTable();
}

    // 4a. Save the element that was changed as a variable.


    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
   
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if(date) {
      filterData = filterData.filter((row) => row.datetime === date);
  }
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on('click', filterTable);
  
  // Build the table when the page loads
  buildTable(tableData);





  function runEnter(){
    d3.event.preventDefault();
    // Save input values.
    dateInput = d3.select("#date-form-input").property("value");
    cityInput = d3.select("#city-form-input").property("value");
    stateInput = d3.select("#state-form-input").property("value");
    countryInput = d3.select("#selCountry").property("value");
    shapeInput = d3.select("#selShape").property("value");
  
    // Keep track of input values on the console.
    console.log(`Date: ${dateInput}`);
    console.log(`City: ${cityInput}`);
    console.log(`State: ${stateInput}`);
    console.log(`Country: ${countryInput}`);
    console.log(`Shape: ${shapeInput}`);
  