# Process Blog project
### by Yann Kerblat

<strong>Objective </strong> The objective of this project was to draw a data model for our own "Process Blog" data, which can then be stored in a given database table. There was some level flexibility on the choice and breadth of content/data/variables that can be used to structure this "Process Blog", as long as it was relevant for the overall project. My process blog is a musical exploration of songs I have randomly come across through the Spotify music application. 

## Instructions

<em> You will expand on weekly assignments 5, 6, and 10 to capture, clean, and store all data for "Process Blog"--a source of semi-structured, qualitative data. The data should be stored in Amazon DynamoDB and queried using the aws-sdk module in Node. You will design and create an interface to display relevant diary entries. </em>

## Overall Process

### Introduction

For this project, I'm using my Spotify "Discovery Weekly" playlist (which is a playlist of new songs randomly generated on a weekly basis based on my musical preferences and listening habits) for my process blog. In other words, every time I hear a song that I appreciated, I bookmark it in a separate playlist. I am recording and tracking basic information and intend to use the process blog to maintain a record keeping mechanism (name of the song, duration, country origin, name of the artist, etc.).

### Data schema

In this databse, the "session type" (day or night) will be the primary key and "dtt" (day + time in numeric valies) will be my sort key. I was inspired by online music applications that include a listening record dashboard. I  tried to keep this user interface as simple and minimalist as possible. For quality assurance purposes, a "summary table" is included to display the "raw data" that is taken from Dynamo DB.

At the beginning, I had unclear/fuzzy data schemes but after getting familiar with the DynamoDB requirements, I decided to simplify my scheme further by deepening some parameters whilst deleting others. Using the denormalized data model, I was hope to track surface-level information and used the process blog method to create a record keeping (name of the song, year, name of artist, country origin) based on the proposed scheme (see below).

![image](https://user-images.githubusercontent.com/82052220/147319046-24ae2d0e-7689-49eb-9c96-c6de93f74aae.png)

### Data processing & calibration via Dynamo DB

Thanks to the starter code, I am able to put together a data entry method to insert the adequate and required data points into a given table format (see below). Once this method was ready to be used and able to contain string, integers and boolean values, I connected to the AWS Dynamo DB to carefully store this information. 

```
class MusicDiscovery {
  constructor(musicalSession, weekDay, dtt, songName, artist, origin, decade, genre, rating) {
    this.pk = {};
    this.pk.S = musicalSession;
    this.weekDay = {};
    this.weekDay.S = weekDay;
    this.dtt = {}; 
    this.dtt.N = new Date(dtt).valueOf().toString();
    this.songName = {};
    this.songName.S = songName;
    this.artistName = {};
    this.artistName.S = artist;
    this.countryOrigin = {};
    this.countryOrigin.S = origin;
    this.eraDecade = {};
    this.eraDecade.N = decade.toString();
    this.genre = {};
    this.genre.S = genre;
    this.myRating = {};
    this.myRating.N = rating.toString();
    this.month = {};
    this.month.N = new Date (dtt).getMonth().toString();
  }
}
```
Based on the following table setup, I was able to insert specific types of variables:

```
musicalEntries.push(new MusicDiscovery("sessionDay", "Tuesday", 'April 5, 2021 22:15:00', "Daily Battles", "Wynton Marsalis et al", "USA", '2010', "Funky Jazz", '4'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Wednesday", 'July 6, 2021 22:15:00', "Sunday Sermon", "Booker T & the MGs'", "USA", '1990', "Eclectic Jazz", '3'));
musicalEntries.push(new MusicDiscovery("sessionDay", "Thursday", 'October 7, 2021 22:15:00', "Surfin'", "Ernest Ranglin", "Jamaica", '1990', "Reggae", '4'));
```

![image](https://user-images.githubusercontent.com/82052220/147319366-4f7f1b07-1401-460a-92b2-0c3453749f3f.png)


![image](https://user-images.githubusercontent.com/82052220/147319410-5cb72e03-8b39-43fd-9d5e-9f56a43a50eb.png)


### Preliminary design

![Process blog](https://user-images.githubusercontent.com/82052220/147321304-c03cee28-1973-476a-8097-d41fed82da5d.png)



### Mockups/Prototyping

<!-- Similar to the AA meeting process, what is important in this conceptual work is to provide the user the ability to filter, explore, sort different dataseets on an interface that is able to update information on a regular basis whilst displaying quantitative and qualitative ratings of song


* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Further tasks for considerations 

In the future, I would like to continue updating this database. I think it is a great place to store personal information and very helpful for me personally. This would be a great tool for anyone to have.


## References

Inspiration, technical references, code snippets, etc.
* [Discovering your Music Taste with Python and Spotify API](https://laptrinhx.com/discovering-your-music-taste-with-python-and-spotify-api-2359421451/)
* [Spotify Analytics Dashboard - sample](https://dribbble.com/shots/5407591-Spotify-Analytics)
* [How to visualize Spotify music trends in Tableau](https://www.tableau.com/en-gb/about/blog/2019/7/how-visualize-spotify-music-trends-tableau)
* [How to make a (Spotify) Excel Dashboard](https://www.youtube.com/watch?v=qwnHoaY2hEk&ab_channel=ThruDesign)
