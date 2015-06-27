// chai must be required through requirejs, chai-as-promised
// sinon and should are already exported to the global scope
var assert = chai.assert;
var expect = chai.expect;

describe('Testing environment', function () {
	it('should work with chai', function () {
		assert.equal('test', 'test');
		expect('test').to.equal('test');
		('test').should.equal('test');
	});
	it("should work with sinon", function () {
		var spy = sinon.spy();
		spy.should.not.have.been.called;
	});
	it('should work asynchronously', function(done){
		// using deferred syntax
		var promise = new Promise(function(resolve, reject) { setTimeout(resolve, 500); });
		promise.should.eventually.be.fulfilled.notify(done);
	});
});

describe('Testing deferred objects', function(){
	it('should resolve', function(done){
		var deferred = defer();
		deferred.promise.should.eventually.be.fulfilled.notify(done);
		deferred.resolve();
	});
	it('should reject', function(done){
		var deferred = defer();
		deferred.promise.should.eventually.be.rejected.notify(done);
		deferred.reject();
	});
	it('should notify', function(){
		var deferred = defer(), spy = sinon.spy();
		deferred.promise.then(null, null, spy);
		deferred.notify();
		spy.should.have.been.calledOnce;
	});
});