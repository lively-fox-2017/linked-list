class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }
  
  addNode(data) {
    const nodeToAdd = {data: data, next: null};
    let CheckPoint = this.head;

  if(!CheckPoint) {
        this.head = nodeToAdd;
        this.length++;

      return nodeToAdd;
  }

  while(CheckPoint.next) {
      CheckPoint = CheckPoint.next;
  }

  CheckPoint.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  getNode(num) {
    let CheckPoint = this.head;
    let count = 0;
    
    if(num > this.length) return "Index yang dimasukin kagak ada bang"
    
    while(count < num) {
      CheckPoint = CheckPoint.next;
      count++;
    }
    
    return CheckPoint;
  }

  removeNode(num) {
    let CheckPoint = this.head
    let count       = 0
    let prevNode    = null
    
    if(num > this.length) return "Index yang dimasukin kagak ada bang"
    
    if(num === 0) {
      this.head = CheckPoint.next;
      this.length--;
      
      return this.head;
    }
    
    while(count < num) {
      prevNode = CheckPoint;
      CheckPoint = CheckPoint.next;
      count++;
    }
    
    prevNode.next = CheckPoint.next;
    CheckPoint = null;
    this.length--;
    
    return this.head;
  }  
}

let link=new LinkedList()

for(let i=0;i<6;i++){
  link.addNode(i)
}

console.log(link)
console.log(link.getNode(3))
console.log(link.removeNode(3))