'use strict';

var should = require('should');

var Ritetag = require('./index');

var rt = new Ritetag();

describe('Ritetag legacy v2.0 unit tests', function() {
	it('hashtagDirectory', function(done) {
		rt.hashtagDirectory('jobs', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});

	it('trendingHashtag', function(done) {
		rt.trendingHashtag({green: false, onlylatin: true}, function(err, res){
			should.not.exist(err);
			res.should.have.property('tags');
			res.tags.should.be.instanceof(Array);
			done();
		});
	});

	/**it('hashtagsForURL', function(done) {
		rt.hashtagsForURL('http://twitter.com', function(err, res){
			should.not.exist(err);
			res.should.be.instanceof(Array);
			done();
		});
	});*/

	it('influencersForHashtag', function(done) {
		rt.influencersForHashtag('socialmedia', function(err, res){
			should.not.exist(err);
			res.should.have.property('influencers');
			res.influencers.should.be.instanceof(Array);
			done();
		});
	});

	it('historicalData', function(done) {
		rt.historicalData('job', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});

	/*it('tweetGrader', function(done) {
		rt.tweetGrader({tweet: 'test', photo: 'false', networks: 'TWITTER'}, function(err, res){
			should.not.exist(err);
			res.should.have.property('twitter').be.instanceof(Object);
			done();
		});
	});*/


	it('historicalData', function(done) {
		rt.historicalData('job', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});
});

describe('Ritetag Data unit tests', function() {
	it('hashtagStats', function(done) {
		rt.hashtagDirectory('jobs', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});

	it('trandingHashtags', function(done) {
		rt.trendingHashtag({green: false, onlylatin: true}, function(err, res){
			should.not.exist(err);
			res.should.have.property('tags');
			res.tags.should.be.instanceof(Array);
			done();
		});
	});

	it('influencer', function(done) {
		rt.influencersForHashtag('socialmedia', function(err, res){
			should.not.exist(err);
			res.should.have.property('influencers');
			res.influencers.should.be.instanceof(Array);
			done();
		});
	});

	it('historicalData', function(done) {
		rt.historicalData('job', function(err, res){
			should.not.exist(err);
			res.should.have.property('data');
			res.data.should.be.instanceof(Array);
			done();
		});
	});
});

describe('Ritetag AI unit tests', function() {
	it('socialMediaCoach', function(done) {
		rt.socialMediaCoach({tweet: '646104462206050304', image: 0, networks: 'TWITTER'}, function(err, res){
			should.not.exist(err);
			res.should.have.property('tips');
			res.data.should.be.instanceof(Object);
			done();
		});
	});

	it('autoEnhancePost', function(done) {
		rt.autoEnhancePost({tweet: 'test', image: 0}, function(err, res){
			should.not.exist(err);
			res.should.have.property('hashtags');
			res.tags.should.be.instanceof(Array);
			done();
		});
	});
});
