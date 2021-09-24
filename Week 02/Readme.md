<h1>Zone 8 - Data clean-up </h1>
<td>
<h2> Additional information & notation </h2>
 <b> Qus #1. "Why are we reading this from a saved text file instead of making another http request?"</b>
 <br></br>
It seems that the main reason is because it's better (if it's possible) to save the files on a local server rather than calling them every time (and saves processing bandwidth presumably). Working directly from the locally saved files decreasing processing time - instead of going back and forth between the client and server.
 <br></br>
 <b> Qus #2. Exploring the browser & the saved HTML file. </b>
 <br></br>
 Given that my student ID number is N00737418, I was assigned with the "08.txt" filed (and focused on the list of AA meetings for Zone 8). I first examined "https://parsons.nyc/aa/m08.html" from the previous week01 assignment. The page seems fragmented in several ways - and styling and table elements are intertwined and placed in the incorrect HTML spots. In the table sections, I noticed that the "td" elements came in sequence and characterized by their styles - and therefore could be isolated then extracted by using their styling properties. In each "td" file, the following information were listed in sequence:
  - Meeting characteristics (title, time, day, type)
  - Address/type of venue
  - Additional information (wheelchair information, non-smoking, special interest, etc.)
  *Looking at the browser seemed easier to characterize how this information was sequenced and organized. Fortunately, the locations we are looking are the only "h4" in the html file. On the other hand, the addresses specifically have no unique identifiers and the "Get Directions" links are also incomplete.*  
   <br></br>
 <b> Qus #3. Filtering out the relevant content & use of text-based methodology </b>
 <br></br>
The file 'wa02.js' breaks down the data extracted from 'aa88.txt' and trims/cleans up/extracts only the address from each listed meeting in zone. First, every *td* tag is pulled out, narrowing down only those that have the style *'border-bottom:1px solid #e3e3e3; width:260px'* and then employs replace, split, and slice to eliminate any irrelevant information that is not part of the *address* content.

<h1> END </h1>
  

