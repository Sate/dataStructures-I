describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  it("should have the correct length when adding named", function() {
    var amount= Math.floor((Math.random()*999)+1);
    for (var i=0; i<amount; i++){
    queue.add('shoes');
    }
    expect(queue.length).toEqual(amount);

  });

  it("should have a method named 'remove'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  it("should remove the right number of things", function() {
    var amount= Math.floor((Math.random()*999)+1);
    for (var i=0; i<amount; i++){
    queue.add('shoes');
    }
    expect(queue.length).toEqual(amount);
    for (var i=0; i<amount; i++){
    queue.remove();
    }
    expect(queue.length).toEqual(0);

  });

  it("should add and remove in the right order", function() {
    var amount= Math.floor((Math.random()*999)+1);
    queue.add('toes');
    for (var i=0; i<amount; i++){
    queue.add('shoes');
    }
    queue.add('hat');
    var x = queue.remove();
    expect(['toes']).toEqual(x);
  });

  // add more tests here to test the functionality of queue
});