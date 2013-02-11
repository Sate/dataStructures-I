describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  it("should have correct length when adding", function() {
  	stack.add(42);
	expect(stack.length).toEqual(1);
  });

  it("should have correct length when removing", function() {
  	stack.add(42); // stack length is now 1
  	stack.add('cat'); // stack length is now 2
  	stack.remove(); // stack length is now 1
	expect(stack.length).toEqual(1);
  });

  it("should add and remove from the stack in the right order", function() {
  	var item = prompt("Add an item!");
  	stack.add(1); // length is now 1
  	stack.add(4); // length is now 2
  	stack.add(item); // length is now 3 
  	var removeditem= stack.remove();
  	var userinput= prompt("What's on top of the stack?!");
  	if (userinput === removeditem){alert('correct!');}else{
  		alert('wrong!, it was a '+ removeditem);
  	}
  	expect(removeditem).toEqual(item);
  	alert('Removed '+removeditem);
  });
});