class LinkedList {
  constructor(element = null) {
    this.element = element;
    this.next = null;
  }

  insertElement(element) {
    let current = this;
    if (current.element !== null) {
      while (current.next !== null)
        current = current.next;
      current.next = new LinkedList(element);
    } else {
      current.element = element;
      current.next = null;
    }
  }

  popElement() {
    if (this.element === null) {
      return -1;
    }
    let next = this.next;
    let result = this.element;
    this.element = next.element;
    this.next = next.next;
    return result;
  }

  print() {
    console.log(require('util').inspect(this, {
      depth: null
    }));
  }
}

let a = [1, 2, 3, 4];
let b = [4, 3, 2, 1];

let test = new LinkedList();
for (let i = 0; i < 10; i++) {
  test.insertElement(i);
}
test.print();
let coba = test.popElement();
console.log("Popped element: ", coba);
test.print();
