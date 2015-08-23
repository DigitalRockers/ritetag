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
	clientId: 'YOUR_CONSUMER_KEY' || process.ENV.RitetagClientId,
	clientSecret: 'YOUR_CONSUMER_SECRET' || process.ENV.RitetagClientSecret,
	oauthToken: 'YOUR_OAUTH_TOKEN' || process.ENV.RitetagOauthToken,
	oauthSecret: 'YOUR_OAUTH_SECRET' || process.ENV.RitetagOauthSecret,
	debug: false //optional
});
```

### hashtagDirectory(query, callback)
Returns an array of up to 10 hashtags most frequently used in tweets containing your query + returns stats on 'query hashtag' (hashtag created by adding # sign to your query).

```javascript
rt.hashtagDirectory('jobs', function(error, results){
	if(error) return console.error(error);

	...
});
```

### trendingHashtag(query, callback)
Where `query` is an object with `green` (boolean, optional, default: false) and `onlylatin` (boolean, optional, default: false) properties.

```javascript
rt.trendingHashtag({green: false, onlylatin: true}, function(error, results){
	if(error) return console.error(error);

	...
});
```
### hashtagsForURL(url, callback)
The api call doesn't work.
<!---
 ```javascript
rt.hashtagsForURL('http://twitter.com', function(error, results){
	if(error) return console.error(error);

	...
});
```
-->
### influencersForHashtag(hashtag, callback)
```javascript
rt.influencersForHashtag('socialmedia', function(error, results){
	if(error) return console.error(error);

	...
});
```

### historicalData(hashtag, callback)
```javascript
rt.historicalData('job', function(error, results){
	if(error) return console.error(error);

	...
});
```

### tweetGrader(query, callback)
Where `query` is an object with `tweet` (string, required), `photo` (boolean, required) and `networks` (string, required, [TWITTER,FACEBOOK]) properties.

```javascript
rt.tweetGrader({tweet: 'test', photo: 'false', networks: 'TWITTER'}, function(error, results){
	if(error) return console.error(error);

	...
});
```

LICENSE
---
The MIT License (MIT)

Copyright (c) 2015 Digital Rockers s.r.l.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
