

var Graph = function(){

	this.storage = [];
};

Graph.prototype.addNode = function(node){
	this.storage.push(node);
};

Graph.prototype.contains = function(node){
	for(var i = 0; i < this.storage.length; i++){
		if(this.storage[i] === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var i = 0; i < this.storage.length; i++){
		if(this.storage[i] === node){
			this.storage.splice(i, 1);
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
	
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



