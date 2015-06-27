/* deferjs - v0.0.0 - 2015-06-27
 * Copyright (c) 2015 Renaud Fontana <sirgzu@hotmail.com>
 * Licensed MIT */
var defer = function(){
	var deferred = {};
	deferred.promise = new Promise(function(resolve, reject){
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	// pimping up vanilla promise with some notify voodoo
	var vanillaThen = deferred.promise.then;
	deferred.promise.then = function(a,b,c){
		deferred.notify = c;
		return vanillaThen.call(deferred.promise,a,b);
	}
	return deferred;
};