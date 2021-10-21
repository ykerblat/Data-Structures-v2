var musicalEntries = [];

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

musicalEntries.push(new MusicDiscovery("sessionDay", "Tuesday", 'April 5, 2021 22:15:00', "Daily Battles", "Wynton Marsalis et al", "USA", '2010', "Funky Jazz", '4'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Wednesday", 'July 6, 2021 22:15:00', "Sunday Sermon", "Booker T & the MGs'", "USA", '1990', "Eclectic Jazz", '3'));
musicalEntries.push(new MusicDiscovery("sessionDay", "Thursday", 'October 7, 2021 22:15:00', "Surfin'", "Ernest Ranglin", "Jamaica", '1990', "Reggae", '4'));

console.log(musicalEntries);

var AWS = require('aws-sdk');
    AWS.config = new AWS.Config();
    AWS.config.region = "us-east-1";

const async = require('async')

var dynamodb = new AWS.DynamoDB();

async.eachSeries(musicalEntries, function(value, callback) {

var params = {};
params.Item = value; 
params.TableName = "processblog";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
    setTimeout(callback, 1000); 
});
