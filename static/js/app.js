// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Create function to build table that will hold our data
function buildTable(data){
    
    // Clear existing data before we insert new data
    tbody.html('');

    // Loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // Append a table row to the table body tag within the HTML | tr = table row
        // each object/UFO sighting in the array will be wrapped in a <tr> tag
        let row = tbody.append('tr');

        // Create function to iterate through dataRow and put into its own row | val = each item in the object, ie location, duration, etc
        Object.values(dataRow).forEach((val) => {

            // Variable to append data into table data
            let cell = row.append('td');

            // Append text value of the data into table data tag
            cell.text(val);


        });

    });

};

// This function will replace your handleClick function
function updateFilters() {

    // Keep track of all filters and put inside function to reset each time if no filters present
    var filterSet = [];
  
    // Save the element, value, and id of the filter that was changed
    let date = d3.select('#datetime').property('value');
    let city = d3.select('#city').property('value');
    let state = d3.select('#state').property('value');
    let country = d3.select('#country').property('value');
    let shape = d3.select('#shape').property('value');
  
  
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    if (date){
  
      filterSet.push({ k: 'datetime', v: date });
  
    };
  
    if (city){
  
      filterSet.push({ k: 'city', v: city });
  
    };
  
    if (state){
  
      filterSet.push({ k: 'state', v: state });
  
    };
  
    if (country){
  
      filterSet.push({ k: 'country', v: country });
  
    };
  
    if (shape){
  
      filterSet.push({ k: 'shape', v: shape });
  
    };
   
  
    // Call function to apply all filters and rebuild the table
    filterTable(filterSet);
  };
  
  function filterTable(filterSet) {
  
    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    
    for( let i = 0; i < filterSet.length; i++){
      let k = filterSet[i].k;
      let v = filterSet[i].v;
      
                      // ie. row => row.shape === 'rectangle'
      filteredData = filteredData.filter(row => row[k] === v);
    };
  
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  };
  
  // Attach an event to listen for changes to each filter
  // Hint: You'll need to select the event and what it is listening for within each set of parenthesis
  d3.selectAll('#filter-btn').on('click', updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
