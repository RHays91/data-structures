var BinarySearchTree = function(value){
	var Tree = Object.create(methods);
	Tree.left = null;
	Tree.right = null;
	Tree.value = value;

	return Tree;
};

var methods = {};

methods.insert = function(value) {
	// check to see if value of node is <= its parent
	if (value < this.value){
		// if true, check to see if position left of parent is occupied
		if (this.left !== null){
			// if true, call insert recursively on the occupant of that position
			this.left.insert(value);
		// if vacant, set this.left = new node
		} else {
			// create a new Tree node with value
			var node = BinarySearchTree(value);
			this.left = node;
		}
	} else if (value > this.value) {
		// else node is greater than parent, so check to see if position right of parent is occupied
		if (this.right !== null){
			// if true, call insert recursively on the occupant of that position
			this.right.insert(value);
		// if vacant, set this.right = new node
		} else {
			var node = BinarySearchTree(value);
			this.right = node;
		}
	}
};

methods.contains = function(target) {
	// given a target value
	// check to see if target value equals the current tree's value
	if (this.value === target) {
		// if true, return true
		return true;
	}
	// if false, check to see if target value is < current value
	if (target < this.value){
		// if true, check to see if current node's left property is null
		if (this.left === null){
			// if true, return false
			return false;
		} else {
			// else call contains recursively on the left node
			return this.left.contains(target);
		}
	} else {
		// check to see if current node's right property is null
		if (this.right === null){
			// if true, return false
			return false;
		} else {
			// else call contains recursively on the right node
			return this.right.contains(target);
		}
	}
};

methods.depthFirstLog = function(func) {
	// run callback on current node value
	func(this.value);
	// check to see if node has left node
	if (this.left !== null){
		// if it does, call depthFirstLog on left node
		this.left.depthFirstLog(func);
	}
	// check to see if node has right node
	if (this.right !== null){
		// if it does, call depthFirstLog on right node
		this.right.depthFirstLog(func);
	}
};
/*
 * Complexity: What is the time complexity of the above functions?
 O(log(n))
 */
