var BinarySearchTree = function(value){
	var Tree = Object.create(methods);
	Tree.left = null;
	Tree.right = null;
	Tree.value = value;

	return Tree;
};

var methods = {};

methods.insert = function(value) {
	var node = BinarySearchTree(value);

	this.left.insert(value)

	if(value < this.value){
		//then the node should be inserted on the left, if the left is null
		if(this.left === null){
			this.left = node;
		} else {
			this.left.insert(value)
		}
	} else if(value > this.value){
		this.right = node;
	}
};

methods.contains = function(value) {};

methods.depthFirstLog = function(func) {};
/*
 * Complexity: What is the time complexity of the above functions?
 */
