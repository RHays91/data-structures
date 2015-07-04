describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  //Extra Credit Tests
  it('should add a value as the new head when addToHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.addToHead(10);
    expect(linkedList.head.value).to.equal(10);
  });


  it('removes the tail when removeTail is called and returns the value', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    expect(linkedList.removeTail()).to.equal(8);
    expect(linkedList.tail.value).to.equal(7);
  });

  it('when adding to tail, new tail references the previous tail', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    expect(linkedList.tail.prev.value).to.equal(7);
  });

});
