'use strict'
//bentuk linked list object, buat queue
//require method push, pop,
// buat satu kelas lagi untuk object yang disimpan

class Node{
  constructor(value){
    this.value= value||null;
    this.next=null;
  }
}

class Queue{
  constructor(){
    this.head=null;
    this.tail=null;
  }
  push(element){
    //kalo tail head kosong maka inisialisasi
    //kalo head atau tail ada maka new obj+
    if(this.head==null){
      this.head = new Node(element);
      this.tail = this.head;
    }else{
      this.tail.next=new Node(element);
      this.tail= this.tail.next;
    }
  }
  pop(){
    if(this.head == null){
      return null;
    }else{
      let nextContainer = this.head.next;
      let headValue = this.head.value;
      this.head.next = null;
      this.head.value = null;
      this.head = nextContainer;
      return headValue;
    }
  }
  displayQueue(){
    let result = '';
    let node =  this.head;
    while(node.next!=null){
      result+=node.value+', ';
      node = node.next;
    }
    result+= node.value;

    return result;
  }
}

let testQueue= new Queue();
console.log(testQueue,'\n');
testQueue.push('first element');
console.log(testQueue,'\n');
testQueue.push('Second element');
console.log(testQueue, '\n');
testQueue.push('third element');
console.log(testQueue);
console.log('pop value: ',testQueue.pop());
console.log(testQueue);
testQueue.push(('fourth element'));
console.log(testQueue);
console.log(testQueue.displayQueue());
