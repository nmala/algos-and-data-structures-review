// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    // no arg needed b/c will always remove last item.
    // returning the removed record because may want to work with it. not needed
    // for added record because the queue instance will contain it already.
    return this.data.pop();
  }
}

module.exports = Queue;
