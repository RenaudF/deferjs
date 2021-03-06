var defer = function(promise){
	var deferred = {};
	if (promise instanceof Promise) deferred.promise = promise;
	else deferred.promise = new Promise(function(resolve, reject){
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