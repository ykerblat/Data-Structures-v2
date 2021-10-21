// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName:"processblog",
    KeyConditionExpression: "pk = :sessionType and dtt between :minDate and :maxDate", // query expression to setup parameters of the query

    ExpressionAttributeValues: { // the query values - here I'm only requesting songs that have originated in the USA (countryOrigin) AND that have emerged between 2000 and 2020 decades.
        ":sessionType": {S: "sessionDay"},
        ":minDate": {N: new Date("January 1, 2020").valueOf().toString()},
        ":maxDate": {N: new Date("December 31, 2021").valueOf().toString()}
    } 
};

dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});