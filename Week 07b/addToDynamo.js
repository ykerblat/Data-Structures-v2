var musicalEntries = [];

// class MusicDiscovery {
//   constructor(topic, dt, entry) {
//     this.topic = {};
//     this.topic.S = topic;
//     this.dt = {}; 
//     this.dt.N = new Date(dt).valueOf().toString();
//     this.entry = {};
//     this.entry.S = entry;
//   }
// }


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


musicalEntries.push(new MusicDiscovery("sessionDay", "Tuesday", 'April 5, 2017 22:15:00', "Volga Boatman", "Ahmad Jamal Trio", "USA", '1950', "Instrumental Jazz", '5'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Wednesday", 'October 12, 2020 22:15:00', "Fine Corinthian Leather", "Charlie Hunter", "USA", '2000', "Jazz Funk", '5'));
musicalEntries.push(new MusicDiscovery("sessionDay", "Thursday", 'April 5, 2019 22:15:00', "Fourty Days", "Billy Brooks", "USA", '2010', "Acid Jazz", '4'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Friday", 'February 5, 2018 22:15:00', "Somewhere I belong", "Gabor Szabo", "Hungary/USA", '1960', "Neo Psychedelic", '4'));
musicalEntries.push(new MusicDiscovery("sessionDay", "Monday", 'May 5, 2016 22:15:00', "Bella Ci Dormi", "Elina Duni & Rob Luft", "Swiss/Albania", '2020', "Vocal Jazz", '5'));
musicalEntries.push(new MusicDiscovery("sessionNight", "Wednesday", 'July 5, 2018 22:15:00', "Wildnerness", "Explosions in the Sky", "USA", '2010', "Math Rock", '5'));


console.log(musicalEntries);

var AWS = require('aws-sdk'); // npm install aws-sdk
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var async = require('async'); 
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
}, function() {
    console.log('Well done!');
});
