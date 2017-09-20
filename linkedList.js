class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(max){
    this.length = 0;
    this.head = null;
    this.max = 10;
  }

  push(value){
    if(this.length === this.max){
      return "list full";
    }
    var newNode = new Node(value);
    var currentNode = this.head;

    //if linked-list is empty
    if(!currentNode){
      this.head = newNode;
      this.length++;
      return newNode;
    };

    //if linked-list is not empty
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;

    this.length ++;
    return newNode;
  }

  // show() {
  //   var currentNode = this.head;
  //   while(currentNode.next !== null){
  //     console.log(currentNode);
  //     currentNode = currentNode.next;
  //   }
  // }
  searchNodeAt(pos){
    var currentNode = this.head;
    var length = this.length;
    var count = 1;

    //if position is not valid
    if(length === 0 || pos <1 || pos>length){
      console.log('Invalid pos');
      return;
    }
    //if position is valid
    while(count<pos){
      currentNode = currentNode.next;
      count++
    }
    return currentNode;
  }

  pop(){

    var currentNode = this.head;
    var beforeNode = null;
    var nodeToDeleted = null;
    var deletedNode = null;

    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this.length--;

    return deletedNode;
  }

  remove(pos){
    var currentNode = this.head;
    var length = this.length;
    var count = 0;
    var beforeNode = null;
    var nodeToDeleted = null;
    var deletedNode = null;

    //if invalid position
    if(pos<0||pos>length){
      console.log('Invalid pos');
      return;
    }
    //if removed pos is head
    if(pos === 1){
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this.length--;

      return deletedNode;
    }
    //if removed pos is not head
    while(count < pos){
      beforeNode = currentNode;
      deletedNode = currentNode.next;
      count++;
    }
    beforeNode.next = deletedNode.next;
    deletedNode = nodeToDeleted;
    nodeToDeleted = null;
    this.length--;

    return deletedNode;
  };
}

var list = new LinkedList(10);
for(var i =0;i<20;i++){
  console.log(list.push(i+1));
}
console.log(list.pop());
console.log(list.searchNodeAt(1));
