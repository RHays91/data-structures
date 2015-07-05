var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  //increase count by 1
  this._count++;
  //if count is >= .75 * this._limit
  if (this._count >= this._limit * .75) {
    //reset the count to 0
    this._count = 0;
    //Double the this._storage limit
    var prevStorage = this._storage;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    //redistribute the nodes
  
    //traverse through the prevStorage and use each node as input to this._storage.set()
    var tempArray = [];
    prevStorage.each(function(list){
      //for each of the nodes 
      var listNode = list.head;
      while (listNode.next !== null) {
        //get the tuple and 
        var tuple = listNode.value;
        //pass it to insert on new double storage
        tempArray.push(tuple);
        listNode = listNode.next;
      }
    });
    for (var i = 0; i < tempArray.length; i++) {
      this._storage.insert(tempArray[i]);
    }
  }
  

  //insert the new node

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
  //traverse through collisionsList (start at head) to check if value[0] === k
  while (listNode.value[0] !== k){
    if (listNode.next === null){
      //it not, return false
      return null;
    } else {
      listNode = listNode.next;
    }
  }
  //if it does, return value[1]
  return listNode.value[1];

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionsList = this._storage.get(i);
  var listNode = collisionsList.head;

  //traverse through collisionsList (start at head) to check if value[0] === k
  while (listNode.value[0] !== k){
    if (listNode.next === null){
      //if not found, do nothing
      return;
    } else {
      listNode = listNode.next;
    }
  }
  //if it does, assign value null to 
  listNode.value[1] = null;
  
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
