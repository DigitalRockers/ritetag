var AIAPI = {};

/**
 * Call Social Media Coach API Action
 *
 * @param query 	String 			query hashtag
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
AIAPI.socialMediaCoach = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/ai/coach/' + query + '/', callback);
};


/**
 * Call Auto Enhance post API Action
 *
 * @param query 	Object 			{green: Boolean, onlylatin: Boolean}
 * @param options 	Object 			option object
 * @param callback 	function 		callback function called with two parameters err, result
 */
AIAPI.autoEnhancePost = function(query, options, callback){
	if(!callback){
		callback = options;
		options = {};
	}

	this._request('/api/v2.2/autoenhance/?' + qs.stringify(query), callback);
};



module.exports = AIAPI;
