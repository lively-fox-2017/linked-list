//class utama node
class Node {
  constructor(data) {
    this.data=data
    this.next=null
  }
}
//class linkdelist
class LinkedList {
  constructor() {
    this._length=0,
    this.head=null
  }
  //methode untuk menambahkan data yang menerima parameter value
  add(value){
    let node=new Node(value),
      currentNode=this.head;
    //pengecekan jika node bukan head maka return node
    if (!currentNode) {
      this.head=node;
      this._length++;
      return node;
    }
    //lakukan iterasi sampai akhir node (this.next==null)
    while (currentNode.next){
      currentNode=currentNode.next;
    }
    //assign currentNode.next dengan node
    currentNode.next=node;
    //add this._length
    this._length++;
    return node;
  }
  remove(position){
    let currentNode=this.head,
        length=this._length,
        count=0,
        message={failure:'node does not exist in this list!'},
        beforeNodeToDelete=null,
        nodeToDelete=null,
        deleteNode=null;
    //pengecekan jika diluar posisi maka tampilkan error
    if (position<0||position>length) {
      throw new Error(message.failure);
    }
    //jika posisi == 1 maka lakukan prosedur ini
    if (position==1) {
      this.head=currentNode.next;
      deleteNode=currentNode;
      currentNode=null;
      this._length--;
      return deleteNode;
    }
    //lakukan iterasi jika count < position
    while (count<position){
      beforeNodeToDelete=currentNode;
      nodeToDelete=currentNode.next;
      count++;
    }
    beforeNodeToDelete.next=nodeToDelete.next;
    deleteNode=nodeToDelete;
    nodeToDelete=null;
    this._length--;
    return deleteNode;
  }
  searchNodeAt(position){
    let currentNode=this.head,
        length=this._length,
        count=1,
        message={failure:'node does not exist in this list!'};

    //pengecekan jika diluar posisi maka tampilkan error
    if (position<0||position>length) {
      throw new Error(message.failure);
    }
    //lakukan penghapusan dengan melakukan pencarian terlebih dahulu posisi yang akan dihapus
    while (count<position){
      currentNode=currentNode.next;
      count++;
    }
    return currentNode;
  }
}

let linkedList=new LinkedList();
linkedList.add('asik');
linkedList.add('makan telor');
linkedList.add('sama kecap');

console.log(linkedList.head);
linkedList.remove(2);
console.log(linkedList.head);
// console.log(linkedList.searchNodeAt(3));
