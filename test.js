var Ritetag = require('./index');


var options = {
	clientId: 'YOUR_CONSUMER_KEY',
	clientSecret: 'YOUR_CONSUMER_SECRET',
	oauthToken: 'YOUR_OAUTH_TOKEN',
	oauthSecret: 'YOUR_OAUTH_SECRET',
	debug: true
};

var rt = new Ritetag(options);


rt.hashtagDirectory('jobs', function(err, res){
	if(err) return console.error(err);

	console.log(res);
});

rt.trendingHashtag({green: false, onlylatin: true}, function(err, res){
	if(err) return console.error(err);

	console.log(res);
});

rt.hashtagsForURL('http://twitter.com', function(err, res){
	if(err) return console.error(err);

	console.log(res);
});

rt.influencersForHashtag('socialmedia', function(err, res){
	if(err) return console.error(err);

	console.log(res);
});

rt.historicalData('job', function(err, res){
	if(err) return console.error(err);

	console.log(res);
});

rt.tweetGrader({tweet: 'test', photo: 'false', networks: 'TWITTER'}, function(err, res){
	if(err) return console.error(err);

	console.log(res);
});
