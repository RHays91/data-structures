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
    }
  };

  list.removeHead = function(){
    var prevHead = list.head;
    delete list.head;
    list.head = prevHead.next
    return prevHead.value;

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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
