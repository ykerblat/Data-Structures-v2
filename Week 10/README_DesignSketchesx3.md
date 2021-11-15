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

<h2> Yann Kerblat - Final designs for Data Structure Final projects x3 </h2>

<h3> Overhaul of AA Meetings Website </h3>

![AA - meetings](https://user-images.githubusercontent.com/82052220/141722177-7ccd0519-4570-441c-93b5-113830f0010c.png)

I am hoping to use a city-level map of Manhattan to display the active meetings and their corresponding locations. On right-hand side column, there is a hierarchy of filters/check boxes that the user can use to narrow the query. First, the viewer could filter out the target zone (and its respective zipcodes assigned to each zone), followed by the desire days of the week (multiple choices possible). Finally, a double-entry slider is added at the end in case the viewer needs to also narrow down specific time slots. Once 1 or many of these filters are activated, the map will display the georeferenced meeting sites, and a click will provde additional information per meeting site.


<h3> Process Blog - Music Discoveries via Spotify</h3>

![Process blog](https://user-images.githubusercontent.com/82052220/141722195-21b59b8b-9f01-45b0-a801-8b3058f286e3.png)

In this database, bread 'type' (wheat or white) is the primary key and 'time spent' is the secondary key. By filtering the 2, you will pull up an entry that shows the data within that entry (name, ingredients, result recordings) as well as the drawing of the bread. I hope to integrate some aesthetic elements that are hand drawn within the viz itself to make it all feel like my real bread journal does.


<h3> Sensor data experiment - Kitchen temp vs. Outside temp </h3>

![Sensor app](https://user-images.githubusercontent.com/82052220/141722187-75fd3d25-eb77-4097-89ef-cff69c18b076.png)

Using the data that I will take from the sensor, I will record and map each 24 hour period of the temperature in my bedroom and show the results in the context of my sleep patterns. The furnace in my room gets so hot and dry, I inevitably wake up and open the window, causing the temperature to drop. I hope to show small multiples to reveal a pattern, and maybe do an average scale to show it all at a glance.
