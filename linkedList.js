class LinkedList {
	constructor(id = 1){
		this.id = id;
		this.next = null;
	}
	
	push(value){
		let now = this;
		let cLink = new LinkedList(value);
		while(now.next !== null){
			now = now.next;
		}
		now.next = cLink;
	}
	
	pop(){
		let now = this;
		if(now.next === null){
			console.log("Tidak ada yang anda hapus");
		}
		
		while(now.next.next !== null){
			now = now.next;
		}
		
		now.next = null;
	}
	
	tampil(){
		console.log(require('util').inspect(this,{
			depth:null
		}));
	}
}

let linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.pop();
linkedList.tampil();