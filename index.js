var util = require('util');
var eyes = require('eyes');

var OAuth = require('oauth'),
	qs = require('querystring');

var apiUrl = 'http://ritetag.com';
var mockupUrl = 'https://private-anon-5491825cb-ritetag.apiary-mock.com';

var Ritetag = function(options){
	if(!options)
		options = {};

	this.clientId = options.clientId || process.env.RitetagClientId;
	this.clientSecret = options.clientSecret || process.env.RitetagClientSecret;
	this.oauthToken = options.oauthToken || process.env.RitetagOauthToken;
	this.oauthSecret = options.oauthSecret || process.env.RitetagOauthSecret;


	this.useMokupServer = options.useMokupServer;


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

	var reqUrl = self.useMokupServer ? mockupUrl : apiUrl;
	reqUrl += url;

	self.oauth.get(
		reqUrl,
		self.oauthToken,
		self.oauthSecret,
		function (error, data, res) {
			self.__debug('GET - ' + reqUrl + ' - ' + (Date.now() - t) + ' ms');
			if(error) return callback(error);

			var json = JSON.parse(data);

			self.__debugInspect(json);

			callback(null, json);
		});
};




/**
 * v 2.0
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

	this._request('/api/v2/ai/twitter/' + query + '/', callback);
};


/**
 * v 2.0
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

	this._request('/api/v2/trending-hashtags/?' + qs.stringify(query), callback);
};


/**
 * v 2.0
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

	this._request('/hashtagsforurl/?' + qs.stringify({url: url}), callback);
};


/**
 * v 2.0
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

	this._request('/api/v2/influencers-for-hashtag/' + hashtag, callback);
};


/**
 * v 2.0
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

	this._request('/api/v2.1/reports/grader/?' + qs.stringify(query), callback);
};



/**
 * Call Hashtag Stats API Action
 *
 * @param hashtag 	String 			query hashtag
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.hashtagStats = function(hashtag, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/data/stats/' + hashtag + '/', callback);
};

/**
 * Call Trending Hashtag API Action
 *
 * @param query 		Object 			query hashtag
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.trandingHashtags = function(query, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/data/trending/' + qs.stringify(query) + '/', callback);
};


/**
 * Call Influencer API Action
 *
 * @param hashtag 	String 			query hashtag
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.influencer = function(hashtag, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/data/influencer/' + hashtag + '/', callback);
};

/**
 * Call Historucal Data API Action
 *
 * @param hashtag 	String 			query hashtag
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.historicalData = function(hashtag, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/data/history/' + hashtag + '/', callback);
};



/**
 * Call Social Media Coach API Action
 *
 * @param query 	String 			query hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.socialMediaCoach = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/ai/coach/' + qs.stringify(query) + '/', callback);
};


/**
 * Call Auto Enhance post API Action
 *
 * @param query 	Object 			{green: Boolean, onlylatin: Boolean}
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
Ritetag.prototype.autoEnhancePost = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/ai/autoenhance/?' + qs.stringify(query), callback);
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
