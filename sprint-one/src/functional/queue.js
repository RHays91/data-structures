var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    /*if (length > 0) {
    length--;
    }*/
    counter++;
    return storage[counter];
  };

  someInstance.size = function(){
    if (counter <= length){
    return length-counter;
    } else {
      return 0;
    }
  };

  return someInstance;
};
