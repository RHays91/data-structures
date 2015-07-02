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
    counter++;
    var temp = storage[counter];
    delete storage[counter];
    return temp;
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
