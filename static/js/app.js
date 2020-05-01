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

// Create function to filter table from input of the 'click'
function handleClick(){

    // Variable to hold our date data taken from the id='datetime' in HTML | property() = grab value for date variable
    let date = d3.select('#datetime').property('value');

    // Set a default filter
    let filteredData = tableData;

    // if date present, filter by that date
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Call buildTable with filtered data, if not date entered, then it'll be just tableData
    buildTable(filteredData);

};

// Attach an event to listen for the form button, when clicked call handleClick function
d3.select('#filter-btn').on('click', handleClick);

// Build the table when the page loads
buildTable(tableData);