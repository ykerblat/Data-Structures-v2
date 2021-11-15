<h2> Final Assignments - Design instructions </h2>
You will design three interfaces for visualizations for your three data sources (AA, process blog, and sensors). NOTE: there is no coding in this assignment. This is strictly a design exercise; the coding will be done for your final assignment submissions.

You will submit sketches, materials, and documentation for your designs, which should include (at a minimum) the following information for each of the three designs for final assignments 1, 2, and 3:

- What will the visualization look like? Will it be interactive? If so, how?
- How will the data need to be mapped to the visual elements?
- For that mapping, what needs to be done to the data? Be specific and clear. Will it require filtering, aggregation, restructuring, and/or something else? How will this be done?
- What is the default view (if any)?
- What assumptions are you making about the user?

<b> Submission requirements </b>
Update your GitHub repository with the relevant file(s). Use GitHub markdown to document your sketches and other materials. In Canvas, submit the URL of the specific location of this work within your data-structures GitHub repository.

<h2> Yann Kerblat - Data Structure - Prospective designs sketches for final projects interfaces (x3) </h2>

<h3> Overhaul of AA Meetings Website </h3>

I am hoping to use a city-level map of Manhattan to display the active meetings and their corresponding locations. On right-hand side column, there is a hierarchy of filters/check boxes that the user can use to narrow the query. First, the viewer could filter out the target zone (and its respective zipcodes assigned to each zone), followed by the desire days of the week (multiple choices possible). Finally, a double-entry slider is added at the end in case the viewer needs to also narrow down specific time slots. Once 1 or many of these filters are activated, the map will display the georeferenced meeting sites, and a click will provde additional information per meeting site.

![AA - meetings](https://user-images.githubusercontent.com/82052220/141722177-7ccd0519-4570-441c-93b5-113830f0010c.png)


<h3> Process Blog - Music Discoveries via Spotify</h3>

In this database, I'm recording songs that have caught my attention from the Spotify "Discover Weekly" automated playlist (a playlist which is randomly generated on a weekly basis based on my musical preferences and listening habits). In other words, every time I hear a song that I appreciated, I bookmark it in a separate playlist. I will be recording and tracking basic information and will use the process blog to maintain a record keeping mecahnism (name of the song, duration, country origin, name of the artist, etc.).

In this databse, the "session type" (day or night) will be the primary key and "dtt" (day + time in numeric valies) will be my sort key. I was inspired by online music applications that include a listening record dashboard. I will try to keep this user interface as simple and minimalist as possible. For quality assurance purposes, a "summary table" will also be inserted to display the "raw data".


![Process blog](https://user-images.githubusercontent.com/82052220/141722195-21b59b8b-9f01-45b0-a801-8b3058f286e3.png)


<h3> Sensor data experiment - Kitchen temp vs. Outside temp </h3>

Based on the data that will be extracted from the sensor, I will record every 2 hours a given temperature record in my kitchen and compare these results with the outside temperature during that same timeslot. I'm curious to see if there will be any daily patterns (i.e. during specific hours) when the temperatures outside and in my kitchen converge (or diverge).

![Sensor app](https://user-images.githubusercontent.com/82052220/141722187-75fd3d25-eb77-4097-89ef-cff69c18b076.png)
