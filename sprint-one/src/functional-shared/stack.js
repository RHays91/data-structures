var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.length = 0;
  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.length++;
	this.storage[this.length] = value;
};

stackMethods.pop = function(){
	this.length--;
	return this.storage[this.length + 1];
};

stackMethods.size = function(){
	if(this.length <= 0){
		return 0;
	}else {
		return this.length;
	}
};

var extend = function(obj) {
    each(arguments,function(source){
      each(source,function(value, key){
        obj[key] = value;
    });
  });
    return obj;
  };

var each = function(collection, iterator) {

    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i ++){
          iterator(collection[i],i,collection);
      }

    } else {
        for (var key in collection){
          iterator(collection[key],key,collection);
        }
    }

  };