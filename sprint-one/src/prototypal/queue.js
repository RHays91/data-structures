var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.length = 0;
  someInstance.counter = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.length++;
	this.storage[this.length] = value;
};

queueMethods.dequeue = function(){
	this.counter++;
	return this.storage[this.counter];
};

queueMethods.size = function(){
	if(this.counter < this.length){
		return this.length - this.counter;
	}else {
		return 0;
	}
};