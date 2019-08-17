// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      // if want an array of the breadth-first traversal, can have a list array and at this poiint, list.push(node.data) while each node is picked out of the array for processing. then make sure to return list
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      // only difference between breadth-frist and depth-first is BF adds to end of array of children, which makes sense as you're listing all children first, not all the way down. DF adds to the front of array because you're listing the child of each child to go all the way down the tree.
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
