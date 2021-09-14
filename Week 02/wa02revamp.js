// //*************************
// // ZONE 08 DATA CLEANING///
// //*************************

// // npm install cheerio

// var fs = require('fs');
// var cheerio = require('cheerio');

// // load the text file into a variable, `content`
// // this is the file that we created in the starter code from last week
// var content = fs.readFileSync('data/aa8.txt');


// // load `content` into a cheerio object
// var $ = cheerio.load(content);

// //Filter and extract all geographical sites from html
// var sites = [];
// $('h4').each(function(i,elem){
//     sites.push( $(elem).text().trim() );
//     //console.log(sites)
// });

// $('h4').addClass('site')

// // Extract meeting names
// var meetingName = [];
// $('td["style*border-bottom:1px solid #e3e3e3; width:260px"]').find('b').each(function(i,elem){
//     meetingName.push( $(elem).text().trim());
//     // console.log(meetingName)
// });

// // Delete selector option
// var locOption = [];
// $('td["style*border-bottom:1px solid #e3e3e3; width:260px"]').find('b').each(function(i,elem){
//     locOption.push( $(elem).text().trim());
//     // console.log(locOption)
// });

// // Add a class for addresses (attempt #1)
// var addresses = [];
// $('</b><br />').after('<div class="address').before.each(function(i, elem) {
//   addresses.push( $(elem).html().trim());
//     console.log(locOption);
// });
    
// // // Pull addresses
// // let addresses = [];

// $('.detailsBox').empty();
// $('h4').empty();
// $('b').empty();
// $('img').empty();
// $('a').empty();
// $('span').empty();
// $('\n').replaceWith("");
// $('\n\t\t\t\t\t\t').replaceWith("");
// $('\n\t\t\t\t\t\t').remove(); 

// $('td["style=*border-bottom:1px solid #e3e3e3; width:260px"]').remove('\n\t\t\t\t\t\t').addClass('address').each(function(i,elem) {
//     addresses.push( $(elem).text().trim() );
//     //console.log (addresses) 
//     });
    
//     fs.writeFileSync('data/AddressOnly.txt', addresses.join("\n"));