'use strict'
class singleLinkedList{
  constructor(){
    //butuh head sebagai pointer awal
    this.list=[];
    this.pointer=-1;
  }
  insertLast(element){
    this.list.push(element);
    this.pointer++;
  }
  deleteLast(){
    if(this.pointer>=0){
      this.list.pop();
      this.pointer--;
    }
  }
  isEmpty(){
    if(this.pointer==-1){
      return true;
    }
    return false;
  }
  displayAll(){
    console.log(this.list);
  }
}

//tambah
//hapus
//is empty
var testLinkedList = new singleLinkedList();
testLinkedList.insertLast('HHAHA');
console.log(testLinkedList.isEmpty());
testLinkedList.deleteLast();
testLinkedList.displayAll();
