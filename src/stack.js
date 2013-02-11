// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  var stack = {
    array: [],
    length: 0,
    add: function(item){ 
    	this.array[this.length] = item;

    	this.length += 1;

    	console.log('added '+item+'!')
    },
    remove: function(){
		// Keep track of where we are
	this.length -= 1;
		// Get the thing on the top of the stack

		return this.array[stack.length];
    }
  };

return stack;
}

