'use strict';

var should = require('should');

var Ritetag = require('./index');

var rt = new Ritetag();

describe('Ritetag unit tests', function() {
	it('hashtagDirectory', function(done) {
		rt.data.hashtagDirectory('jobs', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});

	it('trendingHashtag', function(done) {
		rt.data.trendingHashtag({green: false, onlylatin: true}, function(err, res){
			should.not.exist(err);
			res.should.have.property('tags');
			res.tags.should.be.instanceof(Array);
			done();
		});
	});

	/*it('hashtagsForURL', function(done) {
		rt.data.hashtagsForURL('http://twitter.com', function(err, res){
			should.not.exist(err);
			res.should.be.instanceof(Array);
			done();
		});
	});*/

	it('influencersForHashtag', function(done) {
		rt.data.influencersForHashtag('socialmedia', function(err, res){
			should.not.exist(err);
			res.should.have.property('influencers');
			res.influencers.should.be.instanceof(Array);
			done();
		});
	});

	it('historicalData', function(done) {
		rt.data.historicalData('job', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});

	it('tweetGrader', function(done) {
		rt.data.tweetGrader({tweet: 'test', photo: 'false', networks: 'TWITTER'}, function(err, res){
			should.not.exist(err);
			res.should.have.property('twitter').be.instanceof(Object);
			done();
		});
	});
});
