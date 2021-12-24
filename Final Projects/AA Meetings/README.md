# AA Meetings project
### by Yann Kerblat

Objective:  The objective of this project was to scrape, extract and re-format all the data from the previous AA website and re-calibrate the interface into a more intuitive and user-friendly application.

## Instructions

<em> You will expand on weekly assignments 1, 2, 3, 4, 6, 7, and 10 to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in PostgreSQL and queried using the `pg` module in Node. You will use [Leaflet](https://leafletjs.com/examples/quick-start/) to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker. [Here's an example of a submission in a previous class](http://www.jaimetanner.com/main/18ukyau9e5ai0f9dfklrsuum4ld4rz). </em>

## Overall Process

### Data parsing

<strong> Step 1:</strong> Parsing through the aa websites, geographical AA meeting locations (referred as "addresses" in this/previous documentation) and meeting information were extracted. Thanks to the [TAMU API](https://geoservices.tamu.edu/Services/Geocode/WebService/), we are able to georeference each each AA meeting locations by matching these with site-specfiic, precise lat-long coordinates to facilitate the mapping on a given map. This information was then encoded into a PostGresQL database via Cloud9 (AWS).

The following code is used to structure the SQL query to select the data preiously extracted from the original AA website, and insert it in a DB table - see below.

<img src="https://user-images.githubusercontent.com/82052220/147167267-d706acfd-d932-4bf5-8301-05aa344db75f.png" width="500" height="auto">

To ensure the correct data is adequately inserted and well structured, the cTable function is used for quality assurance purposes as it enables us to visualize the resulting "console.table".

<img width="477" alt="Screen Shot 2021-12-23 at 16 29 48" src="https://user-images.githubusercontent.com/82052220/147310621-1518042d-7e37-49e1-9cea-ec62102eff70.png">


### Preliminary design

Below is a sample of what I had in mind for this application. 

![AA - meetings](https://user-images.githubusercontent.com/82052220/147291103-ffc1751d-8af3-4d67-af44-ee9d612617fa.png)


From an information design perspective, what was important in this preliminary mockup are the following items:
* I
* 


I am hoping to use a city-level map of Manhattan to display the active meetings and their corresponding locations. On right-hand side column, there is a hierarchy of filters/check boxes that the user can use to narrow the query. First, the viewer could filter out the target zone (and its respective zipcodes assigned to each zone), followed by the desire days of the week (multiple choices possible). Finally, a double-entry slider is added at the end in case the viewer needs to also narrow down specific time slots. Once 1 or many of these filters are activated, the map will display the georeferenced meeting sites, and a click will provde additional information per meeting site.



* How/where to download your program
* Any modifications needed to be made to files/folders

### Mockups/Prototyping

![Opening](https://user-images.githubusercontent.com/82052220/147291048-56d3b3c4-4e7f-44e1-bd2c-bf1fa78d3dee.png)

![Zipcode blur](https://user-images.githubusercontent.com/82052220/147291056-05cda89d-1cc3-4942-9558-047bcde9e6e9.png)

![More info popup](https://user-images.githubusercontent.com/82052220/147291060-b3e8a03e-061e-4c47-9d10-4e22df4cc5c5.png)


## Further tasks for considerations 

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## References

https://gopinkcloud.com/aa-meetings-nyc.html

https://www.gethealthyheights.org/service/new-york-inter-group-association-alcoholics-anonymous-new-york

https://www.randymajors.org/zipcodegmap

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)


