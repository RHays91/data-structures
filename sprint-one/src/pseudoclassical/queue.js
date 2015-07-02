var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.counter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
	this.length++;
	this.storage[this.length] = value;
};

Queue.prototype.dequeue = function(){
	this.counter++;
	var temp = this.storage[this.counter];
	delete this.storage[this.counter];
	return temp;
};

Queue.prototype.size = function(){
	if(this.counter < this.length){
		return this.length - this.counter;
	}else {
		return 0;
	}
};
