// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Building a CLEAN table for UFO sightings_11.5.1
function buildTable(data) {
  tbody.html("");
}

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
    }
    );
  });
}

// 1. Create a variable to keep track of all the filters as an object.
console.log(d3.select("#datetime").property("value"))
var date = d3.select("#datetime").property("value");
var city = d3.select("#city").property("value");
var state = d3.select("#state").property("value");
var country = d3.select("#country").property("value");
var shape = d3.select("#shape").property("value");

console.log(date);
console.log(city);
console.log(state);
console.log(country);
console.log(shape);


// 3. Use this function to update the filters. 
function updateFilters() {
  // Prevent the page from refreshing
 

  // flag that table is filtered
  filtered = 1;

  // 4a. Save the element that was changed as a variable.

  // 4b. Save the value that was changed as a variable.

  // 4c. Save the id of the filter that was changed as a variable.
  if (date || city || state || country || shape) {
    // flag that table is filtered
    filtered = 1;

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    let userArray = [["datetime", date], ["city", city], ["state", state], ["country", country], ["shape", shape]];
    let existingArray = userArray.filter(user => user[1] !== "");
    let condition = existingArray.map(arr => "obs." + arr[0] + " == " + "'" + arr[1] + "'").join(" && ");

    // wipe out the tbody to be able to write out new table
    tbody.html("");

    // 6. Call function to apply all filters and rebuild the table
    filterTable();

}}

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filterTable = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (null) {
      filteredData = filteredData.filter(row => row.datetime === date);
      filteredData = filteredData.filter(row => row.city === city);
      filteredData = filteredData.filter(row => row.state === state);
      filteredData = filteredData.filter(row => row.country === country);
      filteredData = filteredData.filter(row => row.shape === shape);

      // 10. Finally, rebuild the table using the filtered data
      buildTable(filteredTable);
    };
  }

  function handleClick() {
    d3.event.preventDefault();

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    let filteredData = tableData;

    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);


    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      console.log("It works with submit") // submission works with input
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
      console.log(filteredData)
    }
    console.log(filteredData)

    if (city) {
      console.log("It works with submit") // submission works with input
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.city === city);
      console.log(filteredData)
    }
    console.log(filteredData)

    if (state) {
      console.log("It works with submit") // submission works with input
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.state === state);
      console.log(filteredData)
    }
    console.log(filteredData)

    if (country) {
      console.log("It works with submit") // submission works with input
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.country === country);
      console.log(filteredData)
    }
    console.log(filteredData)

    if (shape) {
      console.log("It works with submit") // submission works with input
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.shape === shape);
      console.log(filteredData)
    }
    console.log(filteredData)

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }

  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on("click", handleClick);


  // Build the table when the page loads
  buildTable(tableData);