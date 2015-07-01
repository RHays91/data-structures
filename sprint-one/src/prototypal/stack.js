var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.length = 0;
  someInstance.storage = {};

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

