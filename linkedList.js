'use strict';

class Node {
  constructor(num) {
    this.data = num || null
    this.next = null
  }

  push(num) {
    if (this.data == null) {
      this.data = num
      return
    }
    let nodeAdd = new Node(num)
    let nodeCek = this

    while (nodeCek.next) { //find last node 
      nodeCek = nodeCek.next
    }
    nodeCek.next = nodeAdd
  }

  pop() {
    let nodeCek = this
    if (!this.next) { //if only 1 node
      this.data = null
      return
    }
    while (nodeCek.next.next) { //loop find node will be delete
      nodeCek = nodeCek.next
    }
    nodeCek.next = null
  }
}

let myNode = new Node;

myNode.push(1)
myNode.push(2)
myNode.push(3)
myNode.pop()
myNode.push(4)

console.log(myNode);
