

var Graph = function(){

	this.nodes = [];
	this.edges = {};
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	for(var i = 0; i < this.nodes.length; i++){
		if(this.nodes[i] === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var i = 0; i < this.nodes.length; i++){
		if(this.nodes[i] === node){
			this.nodes.splice(i, 1);
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	// for(var i = 0; i < this.edges.length; i++){
	// 	if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
	// 		return true;
	// 	}
	// }
	// return false;

	for(var i = 0; i < this.edges[fromNode].length; i++){
		if(this.edges[fromNode][i] === toNode){
			return true;
		}
	}
	for(var i = 0; i < this.edges[toNode].length; i++){
		if(this.edges[toNode][i] === fromNode){
			return true;
		}
	}	
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if(this.edges[fromNode] === undefined){
		this.edges[fromNode] = [toNode];
	} else {
		this.edges[fromNode].push(toNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	this.edges[fromNode].splice
};

Graph.prototype.forEachNode = function(callback){
	for(var i = 0; i < this.nodes.length; i++){
		callback(this.nodes[i]);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



