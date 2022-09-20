class Stack {
    constructor() {
        this.items = [];
    }
    top() {
        return this.items[this.items.length - 1];
    }
   
    push(ele) {
        return this.items.push(ele);
    }
   
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
   
    isEmpty(){
       return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
 
}
let stack = new Stack();
stack.push(10);
stack.push(21);
stack.push(13);
stack.push(15);
stack.push(18);
console.log("before popping",stack.items);
stack.pop();
console.log("after popping",stack.items);


const removeOdd = (arr) => {
    for (var j = 0; j < stack.size(); j++) {
        if (arr[j] % 2 === 1) {
            arr.splice(j, 1)
            break;
        };
    };
    return arr;
}
output = removeOdd(stack.items)
console.log(output);
const newStack = (myStack) => {
    let newStack = new Stack();
    for (let i = 0; i < stack.size(); i++) {
        newStack.push(myStack[i]);
    }
    return newStack;
}
output = newStack(stack.items)
console.log(output);