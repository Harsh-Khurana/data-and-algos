class Node{
    constructor(value = null ,next = null, previous = null){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }else{
            let end = this.head
            while(end.next){
                end = end.next;
            }
            end.next = newNode;
            newNode.previous = end;
        }
        this.length++;
        this.tail = newNode;
        return this
    }
    //remove from end
    pop(){
        if(this.length===0) return -1;
        let popped = this.tail;
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
           this.tail = popped.previous;
           this.tail.next = null;
           //old node, previous
           popped.previous = null
        }
        this.length--;
        return popped;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
console.log(list.push(3));
