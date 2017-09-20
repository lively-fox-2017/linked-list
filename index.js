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
    }
  }

  popElement() {
    if (this.element === null) {
      return -1;
    }
    let result;
    let current = this;
    if (current.next === null) {
      result = current.element
      current.element = null;
    } else {
      while (current.next.next !== null)
        current = current.next;
      result = current.next.element;
      current.next = null;
    }
    return result;
  }

  print() {
    console.log(require('util').inspect(this, {
      depth: null
    }));
  }
}

let test = new LinkedList();
console.log(test.popElement());
for (let i = 0; i < 10; i++) {
  test.insertElement(i);
}
test.print();
let coba = test.popElement();
console.log("Popped element: ", coba);
test.print();
