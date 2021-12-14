// from data.js
var tableData = data;
// console.log(tableData);

// tbody
var tbody = d3.select("tbody");
// console.log(tbody)


// for each sighting in the data
data.forEach((sighting) => {
    // console.log(siting);

    // add a table row
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);

        // for each column add a cell/td
        var cell = tbody.append("td");
        // set each cell text to the value from the data
        cell.text(value);
    });
});



// filter_table_button 
var filter_table_button = d3.select("#filter-btn");

// Filter_Input_Element
var Filter_Input_Element = d3.select("#datetime");



// When the filter_table_button is clicked
filter_table_button.on("click", (event) => {

    // prevent refresh on events
    d3.event.preventDefault();

    // Clears previous html for the table body. A reset, if you will...
    tbody.html("");

    // get the value of the filter input box 
    var Filter_Input_Value = Filter_Input_Element.property("value");

    // Data_That_Matches_Filter is data where the datetime column value matches the filter input value
    var Data_That_Matches_Filter = tableData.filter(tableData => tableData.datetime === Filter_Input_Value);

    // Account for the case in which no sightings occured on a chosen date
    if (Data_That_Matches_Filter.length == 0) {
        // add a new row, and a cell/td saying there was no sightings
        tbody.append("tr").append("td").text("there were no sightings on this date")
    }
    else {
        // for each Sighting that matches the filter
        Data_That_Matches_Filter.forEach((Sighting_That_Matches_Filter) => {
            // create a new row in the html table
            var row = tbody.append("tr");
            // for each column of the sighting
            Object.entries(Sighting_That_Matches_Filter).forEach(([key, value]) => {
                // console.log(value);
                // for each column add a cell/td in the html table row
                var cell = tbody.append("td");
                // set each cell text to the value from the data
                cell.text(value);
            });
        });
    };
});





