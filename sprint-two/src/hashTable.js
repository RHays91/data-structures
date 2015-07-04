var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = {};
  bucket[k] = v;

  if(this._storage.get(i) === undefined){
  	this._storage.set(i, bucket);
  } else {
  	var temp = this._storage.get(i);
  	temp[k] = v;
  	this._storage.set(i, temp);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket[k] !== undefined) {
  	return bucket[k];
  } else {
  	
  } 

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if(bucket[k] !== undefined){
    bucket[k] = null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */
