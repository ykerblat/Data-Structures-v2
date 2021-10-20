**Background/Preliminary information
**

To initiate this exercise:
(1) a new AWS account had to be created from scratch (this time as root user **_not_** as an IAM user), followed by the creation of a new AWS Cloud 9 environment dedicated to this assignment. 
(2) In addition, an RDS instance database (via AWS) has been setup, and we've also adjusted the security parameters accordingly to include an additional rule.

_(em) The starter code (see below for more details) was provided to faciliate the creation of a database with the aa data (by using directly the JSON file) (em).
_

**Part A**

In this section, in the [wa04.js] (https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007/wa04.js) after exploring/testing some of the main commands in SQL Lite (accessible via the https://sqliteonline.com/), we are extracting the same addresses from the previous AA assignment (as seen in previous documentation the JSON file with the geo-referenced is called [PreciseLocation.json](https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007/PreciseLocation.jsonlocated) which can also be found in this folder to facilitate cross-referencing).

<img width="1001" alt="Screen Shot 2021-10-19 at 22 22 23" src="https://user-images.githubusercontent.com/82052220/138018508-f36e57f1-b216-4ac1-b41e-d35f5b0e39a0.png">

**Part B**

In this second part (see below for the [wa04b.js] (https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007/wa04b.js) for a snippet of the JS code), we are filling the table with the AA JSON data from [PreciseLocation.json](https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007/PreciseLocation.jsonlocated) that was extracted from the previous API assignment.

<img width="1001" alt="Screen Shot 2021-10-19 at 22 22 37" src="https://user-images.githubusercontent.com/82052220/138018640-6c9207a3-143f-4015-966e-fec2cda98bad.png">

**Part C**

Finally, given that the table is being populated "invisibly" (by using node js), the 3rd part was used for quality control by using the file [wa04c.js] (https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007/wa04c.js). Here we need to ensure that the data we populated previously was correctly entered and corresponds to the JSON file content.

<img width="1001" alt="Screen Shot 2021-10-19 at 22 22 45" src="https://user-images.githubusercontent.com/82052220/138019036-49c447a9-c2c4-4525-a98d-5d8342e7387c.png">
