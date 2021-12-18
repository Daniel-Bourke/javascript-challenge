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
var date_Filter_Input_Element = d3.select("#datetime");
var city_Filter_Input_Element = d3.select("#city");
var state_Filter_Input_Element = d3.select("#state");
var country_Filter_Input_Element = d3.select("#country");
var shape_Filter_Input_Element = d3.select("#shape");



// When the filter_table_button is clicked
filter_table_button.on("click", (event) => {

    // prevent refresh on events
    d3.event.preventDefault();

    // Clears previous html for the table body. A reset, if you will...
    tbody.html("");

    // get the value of the filter input box 
    var date_Filter_Input_Value = date_Filter_Input_Element.property("value");
    var city_Filter_Input_Value = city_Filter_Input_Element.property("value");
    var state_Filter_Input_Value = state_Filter_Input_Element.property("value");
    var country_Filter_Input_Value = country_Filter_Input_Element.property("value");
    var shape_Filter_Input_Value = shape_Filter_Input_Element.property("value");


    if (date_Filter_Input_Value == "") {
        var Data_That_Matches_date_Filter = tableData
    }
    else {
        Data_That_Matches_date_Filter = tableData.filter(tableData => tableData.datetime === date_Filter_Input_Value);
    };
    if (city_Filter_Input_Value == "") {
        var Data_That_Matches_city_Filter = Data_That_Matches_date_Filter
    }
    else {
        Data_That_Matches_city_Filter = Data_That_Matches_date_Filter.filter(Data_That_Matches_date_Filter => Data_That_Matches_date_Filter.city === city_Filter_Input_Value);
    };
    if (state_Filter_Input_Value == "") {
        var Data_That_Matches_state_Filter = Data_That_Matches_city_Filter
    }
    else {
        Data_That_Matches_state_Filter = Data_That_Matches_city_Filter.filter(Data_That_Matches_city_Filter => Data_That_Matches_city_Filter.state === state_Filter_Input_Value);
    };
    if (country_Filter_Input_Value == "") {
        var Data_That_Matches_country_Filter = Data_That_Matches_state_Filter
    }
    else {
        Data_That_Matches_country_Filter = Data_That_Matches_state_Filter.filter(Data_That_Matches_state_Filter => Data_That_Matches_state_Filter.country === country_Filter_Input_Value);
    };
    if (shape_Filter_Input_Value == "") {
        var Data_That_Matches_shape_Filter = Data_That_Matches_country_Filter
    }
    else {
        Data_That_Matches_shape_Filter = Data_That_Matches_country_Filter.filter(Data_That_Matches_country_Filter => Data_That_Matches_country_Filter.shape === shape_Filter_Input_Value);
    };


    // Data_That_Matches_Filter is data where the datetime column value matches the filter input value
    // var Data_That_Matches_Filter = tableData.filter(tableData => tableData.datetime === date_Filter_Input_Value);

    // Account for the case in which no sightings occured on a chosen date
    if (Data_That_Matches_shape_Filter.length == 0) {
        // add a new row, and a cell/td saying there was no sightings
        tbody.append("tr").append("td").text("there were no sightings on this date")
    }
    else {
        // for each Sighting that matches the filter
        Data_That_Matches_shape_Filter.forEach((Sighting_That_Matches_Filter) => {
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





