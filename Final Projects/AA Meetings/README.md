# AA Meetings project
### by Yann Kerblat

Objective:  The objective of this project was to scrape, extract and re-format all the data from the previous AA website and re-calibrate the interface into a more intuitive and user-friendly application.

## Instructions

<em> You will expand on weekly assignments 1, 2, 3, 4, 6, 7, and 10 to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in PostgreSQL and queried using the `pg` module in Node. You will use [Leaflet](https://leafletjs.com/examples/quick-start/) to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker. [Here's an example of a submission in a previous class](http://www.jaimetanner.com/main/18ukyau9e5ai0f9dfklrsuum4ld4rz). </em>

## Overall Process

### Data parsing

<strong> Step 1:</strong> Parsing through the aa websites, geographical AA meeting locations (referred as "addresses" in this/previous documentation) and meeting information were extracted. Thanks to the [TAMU API](https://geoservices.tamu.edu/Services/Geocode/WebService/), we are able to georeference each each AA meeting locations by matching these with site-specfiic, precise lat-long coordinates to facilitate the mapping on a given map. This information was then encoded into a PostGresQL database via Cloud9 (AWS).

The following code is used to structure SQL query to select the data preiously extracted from the original AA website, and insert it in a DB table - see below.
![image](https://user-images.githubusercontent.com/82052220/146995056-0bea2034-5b77-4f56-ac11-b21a5ab95426.png)

To ensure the correct data is adequately inserted and well structured, the cTable function is used for quality assurance purposes and to visualize the resulting "console.table" - see below.

![image](https://user-images.githubusercontent.com/82052220/146996049-9facdbf5-3861-4eb8-bdea-533a0474e832.png)


![image](https://user-images.githubusercontent.com/82052220/146943016-4fbe082e-01fa-478d-a11f-db9e1407d980.png)


### Preliminary designs

* How/where to download your program
* Any modifications needed to be made to files/folders

### Mockups/Prototyping

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Further tasks for considerations 

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## References

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)


