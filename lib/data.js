var DataAPI = {};

/**
 * Call Hashtag Directory API Action
 *
 * @param query 	String 			query hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
DataAPI.hashtagDirectory = function(query, options, callback){
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
DataAPI.trendingHashtag = function(query, options, callback){
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
DataAPI.hashtagsForURL = function(url, options, callback){
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
DataAPI.influencersForHashtag = function(hashtag, options, callback){
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
DataAPI.historicalData = function(hashtag, options, callback){
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
DataAPI.tweetGrader = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request(apiUrl + '/api/v2.1/reports/grader/?' + qs.stringify(query), callback);
};


module.exports = DataAPI;
