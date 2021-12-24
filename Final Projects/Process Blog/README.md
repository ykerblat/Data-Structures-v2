# Process Blog project
### by Yann Kerblat

<strong>Objective </strong> The objective of this project was to draw a data model for our own "Process Blog" data, which can then be stored in a given database table. There was some level flexibility on the choice and breadth of content/data/variables that can be used to structure this "Process Blog", as long as it was relevant for the overall project. My process blog is a musical exploration of songs I have randomly come across through the Spotify music application. 


## Instructions

<em> You will expand on weekly assignments 5, 6, and 10 to capture, clean, and store all data for "Process Blog"--a source of semi-structured, qualitative data. The data should be stored in Amazon DynamoDB and queried using the aws-sdk module in Node. You will design and create an interface to display relevant diary entries. </em>


<!-- Similar to the AA meeting process, what is important in this conceptual work is to provide the user the ability to filter, explore, sort different dataseets on an interface that is able to update information on a regular basis whilst displaying quantitative and qualitative ratings of song
 -->

## Overall Process

### Introduction

In this database, I'm recording songs that have caught my attention from the Spotify "Discover Weekly" automated playlist (a playlist which is randomly generated on a weekly basis based on my musical preferences and listening habits). In other words, every time I hear a song that I appreciated, I bookmark it in a separate playlist. I will be recording and tracking basic information and will use the process blog to maintain a record keeping mecahnism (name of the song, duration, country origin, name of the artist, etc.).

In this databse, the "session type" (day or night) will be the primary key and "dtt" (day + time in numeric valies) will be my sort key. I was inspired by online music applications that include a listening record dashboard. I will try to keep this user interface as simple and minimalist as possible. For quality assurance purposes, a "summary table" will also be inserted to display the "raw data".

### Data schema

For this project, I'm using my Spotify "Discovery Weekly" playlist (which is a playlist of new songs randomly generated on a weekly basis). Every time I hear a song that I like I save it in a separate folder on my app. Using the denormalized data model, I plan to track surface-level information and will use the process blog method to create a record keeping (name of the song, year, name of artist, country origin) based on the proposed scheme (see below).

![image](https://user-images.githubusercontent.com/82052220/147319046-24ae2d0e-7689-49eb-9c96-c6de93f74aae.png)



### Data calibration via Dynamo DB


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

```
musicalEntries.push(new MusicDiscovery("sessionDay", "Tuesday", 'April 5, 2021 22:15:00', "Daily Battles", "Wynton Marsalis et al", "USA", '2010', "Funky Jazz", '4'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Wednesday", 'July 6, 2021 22:15:00', "Sunday Sermon", "Booker T & the MGs'", "USA", '1990', "Eclectic Jazz", '3'));
musicalEntries.push(new MusicDiscovery("sessionDay", "Thursday", 'October 7, 2021 22:15:00', "Surfin'", "Ernest Ranglin", "Jamaica", '1990', "Reggae", '4'));
```

### Preliminary design



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
