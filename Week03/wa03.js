"use strict";

// List of dependencies that will be mobilized for this task
const fs = require('fs'),
      querystring = require('querystring'),
      got = require('got'),
      async = require('async'),
      dotenv = require('dotenv'),
      path = require ('path');


// Inserts TAMU API Key
dotenv.config();
const API_KEY = process.env.TAMU_KEY;
const API_URL = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx';

// geocode addresses
let meetingsData = [];
// let addresses = /global streetAddress/; And fixing the data a little bit by removing uneccesary lines using the .split
const dataDir = path.join(__dirname + '/AddressOnly.json') ;
var addresses = JSON.parse(fs.readFileSync(dataDir)).split('\n');

console.log(addresses);

// Here I need to create a variable which are the adresses in an array


// // eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    let query = {
        streetAddress: value,
        city: "New York",
        state: "NY",
        apikey: API_KEY,
        format: "json",
        version: "4.01"
    };
    
//     // construct a querystring from the `query` object's values and append it to the api URL
    let apiRequest = API_URL + '?' + querystring.stringify(query);
    console.log(apiRequest);

    (async () => {
    	try {
    		const response = await got(apiRequest);
    		let tamuGeo = JSON.parse(response.body);
    		console.log(tamuGeo['FeatureMatchingResultType'], apiRequest);
    		meetingsData.push(tamuGeo);
    	} catch (error) {
    		console.log(error.response.body);
    	}
    })();

    // sleep for a couple seconds before making the next request
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('Week03/first.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log(`Number of meetings in this zone: ${meetingsData.length}`);
});


var rawData = JSON.parse(fs.readFileSync('Week03/first.json'));

var finalData = []
 //create a loop to loop through all addresses
for (var i=0; i<rawData.length; i++) {

//create new object to pass only the needed information (address, latitude, longitude)
var tamuGeoIngredient = {
            address: rawData[i].InputAddress.StreetAddress,
            latLong: {
                lat: rawData[i].OutputGeocodes[0].OutputGeocode.Latitude,
                lng: rawData[i].OutputGeocodes[0].OutputGeocode.Longitude
            }};

// push my new objects 
finalData.push(tamuGeoIngredient);

}

console.log(tamuGeoIngredient);

//create a new file with just the necessary geocode information
fs.writeFileSync('PreciseLocation.json', JSON.stringify(finalData));