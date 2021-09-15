//*************************
// ZONE 08 DATA CLEANING///
//*************************

// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the text file into a variable, `content`
// this is the text file that was created from last week's assignment
var content = fs.readFileSync('aa88.txt');


// Load `relevant content` into a cheerio object
var $ = cheerio.load(content);

//Call all 'td' tags from the console
$('td').each(function(i, elem) {
//Only print out 'td' tags with the following style properties
   if ($(elem).attr('style')=='border-bottom:1px solid #e3e3e3; width:260px') {
        //replace anything after '-' ',' '(' with nothing // split lines by tabs and turn into an array // remove all other arrays that dont have the address
            console.log($(elem).html().replace(/[-,(].*/g, "").split("\n\t\t\t\t\t\t").slice(1, 2));
        }
        
});

// extract and print out clean addresses into a new text file
var cleanAddresses=''  //this variable will pull together the relevant lines
$('td').each(function(i, elem) {
    // if the 'td' tag is characterized by the following characteristics... 
    if ($(elem).attr('style')=='border-bottom:1px solid #e3e3e3; width:260px') {
    // the file will (1) replace these characteristics with nothing, (2) split lines based on the tag and turn into an array and (3) remove all the arrays that don't have the address as defined previously
    return cleanAddresses += ($(elem).html().replace(/[-,(].*/g, "").split("\n\t\t\t\t\t\t").slice(1, 2)+'\n');
        }
        
});

//Create brand new file by using the parameters listed previously
fs.writeFileSync('Week 02/AddressOnly.txt', cleanAddresses);




