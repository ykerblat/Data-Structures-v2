<h1>Weekly Assignment #3 - Data clean-up </h1>

<h2> Important setup info </h2> 
A couple of things were required before working on the file that was parsed in Week 02:
(1) Create a a free account on the Texas A&M geoservices website, obtain an API key and double check credit balance.
(2) Assign a new environment variable (by opening a .env file), to preserve the integrity of API key during the coding process.
To access, these variables, I can use process.env to access the environment variables created by the dotenv package (as demonstrated in the starter code),

<h2> Recipe for Node.js to work with API and obtain required, formated and usable JSON file </h2>
**First**, I set the required dependencies and ensure that they are installed - including the following one: 
_ npm install async dotenv querystring_
I also insert "use strict"; the purpose of "use strict" is to indicate that the JavaScript code should be executed in "strict mode". With strict mode, I cannot, for example, use undeclared variables.

<img width="578" alt="Screen Shot 2021-09-22 at 10 04 52" src="https://user-images.githubusercontent.com/82052220/134358793-1c7e89bd-b5a4-4059-b5f9-ac903c4d4ea6.png">


**Second**, I used the week03.js file to call the addresses_m01.json from Week-02 and parsed it. I also make use of path.join in order to return a normalized path by merging two paths together, combined with some light data cleaning by using the .split method. 

<img width="729" alt="Screen Shot 2021-09-22 at 10 10 35" src="https://user-images.githubusercontent.com/82052220/134359712-6866d464-4202-47c6-a839-a9add9944f83.png">

**Third** , here the eachSeries in the async module is used here to iterate over an array and operates on each item in the array in series. I  then construct a querystring from the `query` object's values and append it to the api URL.

<img width="538" alt="Screen Shot 2021-09-22 at 10 14 28" src="https://user-images.githubusercontent.com/82052220/134360413-446227c2-2cc3-46fd-86ad-dadd826dfba3.png">

**Fourth** , afterwards, I use fs.readFileSync to read the recently created JSON file (first.json) that held all of the json data with the newly acquired georeferenced data.
I then create a loop to loop through all addresses that were read. Afterwards, I create a new object to pass only the strictly required information(address, latitude, longitude), before pushing the new objects. To finish, I create a new file with just the necessary geocode information that was required for this week's assignment and ensure that JSON data is readable and adequately structured. The number of objects corresponds to the number of meetings in txt file that was obtained in Week 02.
 
<img width="637" alt="Screen Shot 2021-09-22 at 10 18 16" src="https://user-images.githubusercontent.com/82052220/134361088-4d648e19-fd11-417f-ae76-80c009602e09.png">
