const util = require('util');

class LinkedList {
	constructor() {
		this.item = null;
		this.next = null;
	}

	push(item) {
		let currentNode = this;

		if (!currentNode.item) {
			this.item = item;
			this.next = null;
		} else {
			let node = { item: item, next: null }

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
		}
	}

	pop() {
		let currentNode = this;

		if (!currentNode.item) {
			return -1;
		} else if (!currentNode.next) {
			currentNode.item = null;
		} else {
			while (currentNode.next.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = null;
		}
	}

	print() {
		console.log(util.inspect(this, {showHidden: false, depth: null}));
	}

}

let a = new LinkedList();

a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.pop();
a.pop();
a.print();
