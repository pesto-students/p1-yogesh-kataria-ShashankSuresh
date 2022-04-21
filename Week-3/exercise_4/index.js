/*
when "createStack" function returns "push" and "pop" inner function, then function bundled with its lexical scope and creates a closure. That is why outside of "createStack" function  cannot access "items" variable, but it can access only in the function which is inside of the "createStack"

*/

function createStack() {
    // Write your code here...
    const items = [];
    return (function () {
        return {
            push(item) {
                items.push(item);
            },
            pop() {
                return items.pop();
            },
            print(){
                return items;
            }
            
        }
    })();
}
const stack = createStack();
stack.push(10); // => items : [10]
stack.push(5); // => items : [10, 5]
stack.pop(); // => 5 // => items : [10]
console.log(stack.items); // => undefined 
stack.items = [10, 100, 1000];
console.log(stack.items); // [10, 100, 1000]
console.log(stack.print()); //items : [10] not [10, 100, 1000]