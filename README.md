#Ritetag
[![Build Status via Travis CI](https://travis-ci.org/DigitalRockers/ritetag.svg?branch=master)](https://travis-ci.org/DigitalRockers/ritetag)
[![NPM version](http://img.shields.io/npm/v/ritetag.svg)](https://www.npmjs.org/package/ritetag)

[Ritetag](ritetag.com) api module for [nodejs](nodejs.org)

Ritetag API documentation: [http://docs.ritetag.apiary.io/](http://docs.ritetag.apiary.io/)

This software is released under the MIT license. See `LICENSE` for more details

## Download and Installation

From the command line

	$ npm install ritetag

package.json

	dependencies: {
      ...
      "ritetag": "*$version*",
      ...
    }
    ...

## Example use

```javascript
var Ritetag = require('ritetag');

var rt = new Ritetag({
	clientId: 'YOUR_CONSUMER_KEY',
	clientSecret: 'YOUR_CONSUMER_SECRET',
	oauthToken: 'YOUR_OAUTH_TOKEN',
	oauthSecret: 'YOUR_OAUTH_SECRET'
});

rt.hashtagDirectory('jobs', function(error, results){
	if(error) return console.error(error);
	console.log(results);
});
```

## Documentation

Initialize Ritetag object:
```javascript
var Ritetag = require('ritetag');
var rt = new Ritetag({
	clientId: 'YOUR_CONSUMER_KEY' || process.env.RitetagClientId,
	clientSecret: 'YOUR_CONSUMER_SECRET' || process.env.RitetagClientSecret,
	oauthToken: 'YOUR_OAUTH_TOKEN' || process.env.RitetagOauthToken,
	oauthSecret: 'YOUR_OAUTH_SECRET' || process.env.RitetagOauthSecret,
	debug: false //optional
});
```

### hashtagStats(hashtag, callback)
Returns an array of up to 10 hashtags most frequently used in tweets containing your query + returns stats on 'query hashtag' (hashtag created by adding # sign to your query).

```javascript
rt.hashtagStats('jobs', function(error, results){
	...
});
```

### trendingHashtags(query, callback)
Returns an array of up to 20 hashtags trending in the last 24 hours (hourly floating averages)

```javascript
rt.trendingHashtags({green: 0, latin: 0}), function(error, results){
	...
});
```

### influencer(hashtag, callback)
Returns an array of up to 10 influential Twitter accounts using a specific hashtag

```javascript
rt.influencer('jobs'), function(error, results){
	...
});
```

### historicalData(hashtag, callback)
Returns daily stats of a hashtag for the last 30 days (tweets, retweets, images, links, mentions etc.)

```javascript
rt.historicalData('jobs'), function(error, results){
	...
});
```

### socialMediaCoach(query, callback)
Analyzes content of a social media post and returns a tailored array of textual tips on how to improve the reach and engagement of that particular post

```javascript
rt.socialMediaCoach({tweet: 'test', image: 0, networks: 'TWITTER'}), function(error, results){
	...
});
```

### autoEnhancePost(query, callback)
Analyzes content of a social media post and returns arrays of suggested hashtags, images and final version of enhanced post

```javascript
rt.autoEnhancePost({tweet: 'test', image: 0}), function(error, results){
	...
});
```

### API v 2.0

#### hashtagDirectory(query, callback)
Returns an array of up to 10 hashtags most frequently used in tweets containing your query + returns stats on 'query hashtag' (hashtag created by adding # sign to your query).

```javascript
rt.hashtagDirectory('jobs', function(error, results){
	if(error) return console.error(error);

	...
});
```

#### trendingHashtag(query, callback)
Where `query` is an object with `green` (boolean, optional, default: false) and `onlylatin` (boolean, optional, default: false) properties.

```javascript
rt.trendingHashtag({green: false, onlylatin: true}, function(error, results){
	if(error) return console.error(error);

	...
});
```
#### hashtagsForURL(url, callback)
The api call doesn't work.
<!---
 ```javascript
rt.hashtagsForURL('http://twitter.com', function(error, results){
	if(error) return console.error(error);

	...
});
```
-->
#### influencersForHashtag(hashtag, callback)
```javascript
rt.influencersForHashtag('socialmedia', function(error, results){
	if(error) return console.error(error);

	...
});
```

#### historicalData(hashtag, callback)
```javascript
rt.historicalData('job', function(error, results){
	if(error) return console.error(error);

	...
});
```

#### tweetGrader(query, callback)
Where `query` is an object with `tweet` (string, required), `photo` (boolean, required) and `networks` (string, required, [TWITTER,FACEBOOK]) properties.

```javascript
rt.tweetGrader({tweet: 'test', photo: 'false', networks: 'TWITTER'}, function(error, results){
	if(error) return console.error(error);

	...
});
```
