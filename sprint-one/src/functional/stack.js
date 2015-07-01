var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.pop = function(){
    
    length--;
    return storage[length + 1];

  };

  someInstance.size = function(){
    if(length < 0){
      return 0;
    } else {
      return length;
    }
  };

  return someInstance;
};
