function LinkedList(){
    this._length = 0;  
    this._head = null;
}

LinkedList.prototype = { 
    push: function (data){
        //create a new node, place data in
        var node = {
                data: data,
                next: null
            },
            //used to traverse the structure
            current;
        //special case: no items in the list yet
        if (this._head === null){
            this._head = node;
        } else {
            current = this._head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        //don't forget to update the count
        this._length++;
    },
    pop: function(index){   
                //check for out-of-bounds values
            if (index > -1 && index < this._length){
                var current = this._head,
                    previous,
                    i = 0;
                //special case: removing first item
                if (index === 0){
                    this._head = current.next;
                } else {
                    //find the right location
                    while(i++ < index){
                        previous = current;
                        current = current.next;
                    }
                    //skip over the item to remove
                    previous.next = current.next;
                }
                //decrement the length
                this._length--;
                //return the value
                return current.data;            
            } else {
                return null;
            }
        }
    };

var sll = new LinkedList();
// console.log('========',sll)
// console.log('')

//push node
sll.push(4);
// console.log('========',sll)
// console.log('')
// console.log('========',sll.head)
// // console.log('')
sll.push(1);
console.log('========',sll)
sll.pop(1)
console.log('=============',sll)
// console.log('')
// sll.push(4);
// console.log('========',sll)
// console.log('')

//check values by traversing LinkedList 
// sll.head; //Object {data: 2, next: Object}
// sll.head.next; //Object {data: 3, next: Object}
// sll.head.next.next; //Object {data: 4, next: null}