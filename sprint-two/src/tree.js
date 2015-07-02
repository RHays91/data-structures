var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newChild = Tree(value);
	this.children.push(newChild);
};

treeMethods.contains = function(target){
	var found = false;
	var compare = function(tree){
		if (tree.value === target){
			found = true;
		} else if (tree.children.length === 0){
			return;
		} else {
			each(tree.children, compare);
		}
	};
	compare(this);
	return found;
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

var extend = function(obj) {
    each(arguments,function(source){
      each(source,function(value, key){
          obj[key] = value;
      });
    });
    return obj;
  };
/*
 * Complexity: What is the time complexity of the above functions?
 */
