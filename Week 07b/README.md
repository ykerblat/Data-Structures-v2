
**Part 1 - AA Locations - confirming data content with initial SQL query (via console.table)**

In this part, we are using the starter code to get more familiar with a standard/oft-cited SQL query to select the data that was extracted from the original AA website, and input it in a table (by using the cTable function 'console.table) - see below.

<img width="470" alt="Screen Shot 2021-10-20 at 17 52 45" src="https://user-images.githubusercontent.com/82052220/138178062-6899e030-57cc-4659-bebf-7713d62e8bd4.png">

In order to obtain and visualize the "console.table", it's important to adapt the login credentials at the onset of the script (we've also referred the SQL table as 'aalocations') - see below.

<img width="307" alt="Screen Shot 2021-10-20 at 17 53 26" src="https://user-images.githubusercontent.com/82052220/138178073-bae5a2b1-0c95-4999-b84e-c200e8efe660.png">

**Part 2 -  Process blog - adding further data to DynamoDB**

On DynamoDB, it's important to remember that (1) we can only query through the primary key (in most of the cases), and that partition key need to be unique.
For shaping the query method - important to refer to this [query page](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html) to articulate as precisely as possible the scope and focus of the query itself.

Before starting with this query process, I updated the initial table and adjusted the parameters of my table in for my process blog and decided to simplify some of its features, in addition to supplementing the table with 6 additional rows of consistent/commensurable data points (so that we have a total of 9 images) through the [addToDynamo.js](https://github.com/ykerblat/Data-Structures-v2/blob/main/Week%2007b/addToDynamo.js) file. I also modified the primary key (pK) to 'sessionType' (either during the "day" or during the "night" and the sort key (sk) to 'dtt' (date + time in number values). My SQL query is displayed below - and shows that I'm interested in filtering in only "sessionDay" (primary key) as well as any entry between January 1, 2020 and December 31, 2021.

<img width="1025" alt="Screen Shot 2021-10-21 at 00 27 49" src="https://user-images.githubusercontent.com/82052220/138211776-863645ba-da1a-45df-ae5e-c6238eeced98.png">

Here are my query results, shown in the console:

<img width="562" alt="Screen Shot 2021-10-21 at 00 30 34" src="https://user-images.githubusercontent.com/82052220/138211857-955f8e39-42e6-4a2a-9008-f004202460a9.png">
