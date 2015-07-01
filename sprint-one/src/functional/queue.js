var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
    length--;
    }
    return storage[length + 1];
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
