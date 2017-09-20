class Node {

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  push(data) {

    let node = new Node(data, null);

    let nodeTracker = this;

    // While next is !null, loop until find the tail of list
    while (nodeTracker.next) {

      nodeTracker = nodeTracker.next;

    }

    nodeTracker.next = node;

    return this;

  }

  pop() {

    // If there is no `next`, it means there's one left, set `data` and `next` to null
    if (!this.next) {

      this.data = null;
      this.next = null;

      return this;

    }

    let nodeTracker = this;

    // Find the tail
    while (nodeTracker.next.next) {

      nodeTracker = nodeTracker.next;

    }

    /*
     * If the `next` after this current node's `next` is null,
     * then that's the last node, make the node before
     * this last one's `next` to null
    */
    nodeTracker.next = null;

    return this;

  }

  print() {

    console.log(this);

  }

}

let linkedList = new Node(1, null);

// Generate rest of the node
for (let i = 2; i <= 6; i++) {
  linkedList.push(i);
}

linkedList.pop();
linkedList.pop();
linkedList.pop();

linkedList.print();
