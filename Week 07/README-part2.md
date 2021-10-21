_NB. This assignment was finalized after class that was dedicated to this exercise on October 20._

**Step 1**

Initially, I had a rough concept of my DB schema from [Week 5](https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2005/Data%20Structures%20-%20Week%205%20Assignment%20-%20Process%20Blog%20Schema-%20Yann%20Kerblat.pdf), but after reading the SQL and Dynamo DB documentation, I decided to simplify - for example by removing any nested data items, reorganizing the sequencing of the information and be more specific with specific areas.

I'm re-attaching the initial schema below to facilitate cross-referencing - see below.
<img width="783" alt="Screen Shot 2021-10-20 at 15 02 13" src="https://user-images.githubusercontent.com/82052220/138156765-f2796597-523a-4474-84fe-f755e04f44b8.png">

**Step 2** 

Based on the information/suggestions provided by the starter code, I managed to find a method to insert the data that is intended for the process blog. Once the template is created, it's easy to discern/establish which data points are string, booleans or number values - which allows me to push the information into the newly created object (MusicDiscovery). By console logging, we are able to confirm that the information exists, was correctly inserted and retains the intended sequence/structure - see below.

<img width="1042" alt="Screen Shot 2021-10-21 at 00 15 11" src="https://user-images.githubusercontent.com/82052220/138210714-974a9526-3606-402d-8228-22127ce68769.png">


**Step 3**

Finally, after we are able to link the 2 servers that are internal to AWS by modifying the IAM property (and after confirming that both servers are linked) - we can push the data to populate our SQL table (and verified through DynamoDB). For this purpose, to ensure all the rows are captured and stored in one iteration, a loop is created by using the 'async' function so that we can push all musicblog entries at once - see below.

<img width="488" alt="Screen Shot 2021-10-20 at 15 28 04" src="https://user-images.githubusercontent.com/82052220/138159211-edff0171-48a4-40b4-8945-5a7f4922b902.png">

**Step 4**

Finally, to make sure all the data was correctly exported/imported, we can use DynamoDB to confirm that the process blog table has been correctly populated - see below.

<img width="993" alt="Screen Shot 2021-10-21 at 00 20 00" src="https://user-images.githubusercontent.com/82052220/138210976-d8d3c38b-945b-4477-98c9-528e25c9d77c.png">

