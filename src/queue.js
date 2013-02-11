// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
    add:function(item){
      this.array[this.length]= item;
      this.length++;
    },
    remove:function(){
      this.length--;
      return this.array.splice(0,1);
    },
    length:0,
    array:[]
  };
  return queue;
}