# AA Meetings project
### by Yann Kerblat

<strong>Objective</strong> The objective of this project was to scrape, extract and re-format all the data from the previous NYC Anonymous Alcoholics (AA) website and re-calibrate the interface into a more intuitive, dynamic, and user-friendly application.

## Instructions

<em> You will expand on weekly assignments 1, 2, 3, 4, 6, 7, and 10 to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in PostgreSQL and queried using the `pg` module in Node. You will use [Leaflet](https://leafletjs.com/examples/quick-start/) to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker. [Here's an example of a submission in a previous class](http://www.jaimetanner.com/main/18ukyau9e5ai0f9dfklrsuum4ld4rz). </em>

## Overall Process

### Data parsing

<strong> Step 1:</strong> Parsing through the aa websites, geographical AA meeting locations (referred as "addresses" in this/previous documentation) and meeting information were extracted. 

<strong> Step 2:</strong> Thanks to the [TAMU API](https://geoservices.tamu.edu/Services/Geocode/WebService/), we are able to georeference each each AA meeting locations by matching these with site-specfiic, precise lat-long coordinates to facilitate the mapping on a given map. This information was then encoded into a PostGresQL database via Cloud9 (AWS).

<strong> Step 3:</strong>The following code is used to structure the SQL query to select the data preiously extracted from the original AA website, and insert it in a DB table - see below.

<img src="https://user-images.githubusercontent.com/82052220/147167267-d706acfd-d932-4bf5-8301-05aa344db75f.png" width="500" height="auto">

To ensure the correct data is adequately inserted and well structured, the cTable function is used for quality assurance purposes as it enables us to visualize the resulting "console.table".

<img width="477" alt="Screen Shot 2021-12-23 at 16 29 48" src="https://user-images.githubusercontent.com/82052220/147310621-1518042d-7e37-49e1-9cea-ec62102eff70.png">

### Preliminary design

<strong> Step 4:</strong> Below is a sample of what I had in mind for this application. 

![AA - meetings](https://user-images.githubusercontent.com/82052220/147291103-ffc1751d-8af3-4d67-af44-ee9d612617fa.png)

In terms of assumptions/parameters, I was hoping to use a city-level map of Manhattan for the user to visualize all the potential meetings that are listed as well their corresponding locations. In this design, it is important for the user to review AA meeting options based on location but also based on date/time since we assume that user either need to attend periodic, regular AA meetings (option prioritizing long-term needs) but also to locate the next available meeting (option prioritizing ASAP needs). 

From an information design perspective, what was important in this preliminary mockup are the following items. In the right-hand side column, the user can opt for 1, 2 and/or 3 sets of filters/check boxes (together or separately) - which are used to structure the initial quert. 
* **First**, the user needs to determine if a given target zone (1 target zone corresponds to specific zipcodes across NYC) is sufficiently important for structuring this query. 
* **Second**, the desired day of the week can opted or not thanks to a check box. 
* **Third**, with the use of a double-edged slider, the viewer _can_ interact with this slide if she/he needs to restrict down the query to a given time slow. One or several of these previously-listed filters can be opted for this query, while the map will project the relevant geogreferenced meetings sites. 
*  **Finally**, a click on a given node on the map will provide additional information per meeting site (and by extension for each listed meeting).
                    
### Mockups/Prototyping

<strong> Step 5:</strong> Because the data cleaning took more time than anticipated, I decided to rethink the 'decision tree' and reviewed the several decision points for the user. As a result, I've decided to slightly refine my preliminary design to show what the application would look like if I had more time - see below for a higher-resolution design.

<strong> Website landing page </strong> - on the website landing page, given COVID-19 circumstances, first the user needs to decides if he/she wants to explore online AA meetings vs. in-person AA meetings. On this page, we can also see all the possible meeting sites that provide this services (each site therefore corresponds to dedicated meeting time slots).
![Opening](https://user-images.githubusercontent.com/82052220/147291048-56d3b3c4-4e7f-44e1-bd2c-bf1fa78d3dee.png)

<strong> Zipcode sub-selection </strong> In this image, we can imagine that the user decided to input geographical preferences ("Which zones/which postcodes need to be prioritized?") as well as temporal data ("Which time slots/which day of the week is more convenient?"). The user needs to decide if she/he wants to interact with 1, 2 or 3 of the suggested filters. It's worth noting here that zipcodes were aggregated into 9 distinct "zones" in order to facilitate the filtering of parameters for the user.
![Zipcode blur](https://user-images.githubusercontent.com/82052220/147291056-05cda89d-1cc3-4942-9558-047bcde9e6e9.png)

<strong> Popup with more meeting info </strong> In this image, we can imagine that the user is browsing relevant meeting sites as well as meeting time slots. Once a given meeting site is clicked, further information about the meeting category, the building entrance/exit information, level of accessibility appears through a modal in order to provide further information.
![More info popup](https://user-images.githubusercontent.com/82052220/147291060-b3e8a03e-061e-4c47-9d10-4e22df4cc5c5.png)


Initially, I had intended to design from scratch an interface that allowed filtering sorting, geographical exploring on a map based on the proposed design but I ran out of time and the data parsing proved to be more difficult than ancitipated. With more time and better troubleshooting capabilities, I think I could have produced this application.


The following websites for used for visual inspiration/design calibration:

https://gopinkcloud.com/aa-meetings-nyc.html

https://www.gethealthyheights.org/service/new-york-inter-group-association-alcoholics-anonymous-new-york

https://www.randymajors.org/zipcodegmap



