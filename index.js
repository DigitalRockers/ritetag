var util = require('util');
var eyes = require('eyes');

var OAuth = require('oauth'),
	qs = require('querystring');

var apiUrl = 'http://ritetag.com';


var Ritetag = function(options){
	if(!options)
		options = {};

	this.clientId = options.clientId || process.ENV.RitetagClientId;
	this.clientSecret = options.clientSecret || process.ENV.RitetagClientSecret;
	this.oauthToken = options.oauthToken || process.ENV.RitetagOauthToken;
	this.oauthSecret = options.oauthSecret || process.ENV.RitetagOauthSecret;

	this.oauth = new OAuth.OAuth(
		null,
		null,
		this.clientId,
		this.clientSecret,
		'1.0',
		null,
		'HMAC-SHA1'
	);

	if(options.debug){
		this.debug = true;
		this.__inspect = eyes.inspector({maxLength: false, stream: null});
	}

	return this;
};

Ritetag.prototype._request = function(url, callback){
	var self = this,
		t = Date.now();

	self.oauth.get(
		url,
		self.oauthToken, 
		self.oauthSecret,
		function (error, data, res) {
			self.__debug('GET - ' + url + ' - ' + (Date.now() - t) + ' ms');
			if(error) return callback(error);	

			var json = JSON.parse(data);

			self.__debugInspect(json);

			callback(null, json);
		});
};


/**
 * Call Hashtag Directory API Action 
 *
 * @param query 	String 			query hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.hashtagDirectory = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/api/v2/ai/twitter/' + query + '/', callback);
};


/**
 * Call Trending Hashtag API Action 
 *
 * @param query 	Object 			{green: Boolean, onlylatin: Boolean}
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.trendingHashtag = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/api/v2/trending-hashtags/?' + qs.stringify(query), callback);
};


/**
 * Call Hashtags for URL API Action 
 *
 * @param url 		String 			url
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.hashtagsForURL = function(url, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/hashtagsforurl/?' + qs.stringify({url: url}), callback);
};


/**
 * Call Influencers for Hashtag API Action 
 *
 * @param hashtag 	String 			hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.influencersForHashtag = function(hashtag, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/api/v2/influencers-for-hashtag/' + hashtag, callback);
};


/**
 * Call Historical data API Action 
 *
 * @param hashtag 	String 			hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.historicalData = function(hashtag, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/api/v2/historical-data/' + hashtag, callback);
};


/**
 * Call Tweet grader API Action 
 *
 * @param query 	Object 			{tweet: String, photo: Boolean, networks: String[TWITTER,FACEBOOK]}
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.tweetGrader = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}
	
	this._request(apiUrl + '/api/v2.1/reports/grader/?' + qs.stringify(query), callback);
};



/**  Debug  **/
Ritetag.prototype.__debug = function (str) {
	if(this.debug)
		console.log('Ritetag - ' + new Date().toISOString() + ' - ' + str);
};

Ritetag.prototype.__debugInspect = function (str, obj) {
	if(this.debug){
		if(obj)
			console.log('Ritetag - ' + new Date().toISOString() + ' - ' + str + ' - ' + this.__inspect(obj));
		else
			console.log('Ritetag - ' + new Date().toISOString() + ' - ' + this.__inspect(str));
	}
};


module.exports = Ritetag;