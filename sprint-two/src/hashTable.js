var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, this._storage.get(i) || LinkedList());
  var collisionsList = this._storage.get(i);
  var listNode = collisionsList.head;
  
  //traverse through the collisionsList and check if value[0] === k
  var checkForValue = function(node, k, v){
    if (node === null) {
      collisionsList.addToTail([k, v]);
      return;
    }
    if (node.value[0] === k){
      node.value[1] = v;
      return;
    } else {
      checkForValue(node.next, k, v);
    }
  };
    //if it does, then update value[1] = v
    //if no match, then add [k, v] to tail of list

  checkForValue(listNode, k, v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionsList = this._storage.get(i);
  var listNode = collisionsList.head;
  //traverse through collisionsList to check if value[0] === k
  while(listNode.value[0] !== k){
    if (listNode.next === null){
      //it not, return false
      return false;
    } else {
      listNode = listNode.next;
    }
  }
  //if it does, return value[1]
  return listNode.value[1];

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if(bucket[k] !== undefined){
    bucket[k] = null;
  }
};

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      var curTail = list.tail;
      list.tail = node;
      curTail.next = node;
      list.tail.prev = curTail;
    }
  };

  list.addToHead = function(value){
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      var curHead = list.head;
      list.head = node;
      curHead.prev = node;
      list.head.next = curHead;
    }
  };

  list.removeHead = function(){
    var prevHead = list.head;
    delete list.head;
    list.head = prevHead.next
    return prevHead.value;
  };

  list.removeTail = function(){
    var prevTail = list.tail;
    delete list.tail;
    list.tail = prevTail.prev;
    return prevTail.value;
  };

  list.contains = function(target){
    var temp = list.head;
    while (temp.value !== target) {
      temp = temp.next;
      if (temp === null) {
        return false;
      }
    }
    return true;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */


/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */
