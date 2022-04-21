/*
 Bind function example
 1. .bind is permanently bind 
 2. The bind() method creates a new function when called, has its this keyword set to provided value with given sequence of arguments preceding any provided when the new function is called.
*/

function multiply(a, b){
    return this.a * this.b;
} 
/*
 output is NaN because "this" is now bound to global scope so, this.a and this.b become undefinded and udefined * undefined  becomes NaN
 */
console.log(multiply()); 

const multi = multiply.bind({
    a: 4,
    b: 8
}); //multi is different function compare as multiply but behaviour is same except the value pass from multi

console.log(multi());
/*
 Now we will get the output 32 because when you pass the object using bind so that obj become "this" value this.a = 4 and this.b = 8
*/

const multi2 = multi.bind({a: 4, b:4});
console.log(multi2()); // output is 32 because you can not rebind again


/*
call function example

1. call is similar as bind function
2. call function doesn't create another function
3. call() method calls a function with a given this value and arguments provided individually
*/

function details(){
    var intro = [
        'My name is',
         this.name,
        'and My profession is',
        this.profession
    ].join(' ');
    console.log(intro);
}

var user1 = {name:'Yogesh', profession:'Software Engineer'};

var user2 = {
    name: 'Ankit',
    profession: 'Ui/Ux Engineer'
};

// same function now behaving different with two different objects because i am calling this function with different object

details.call(user1); //output-My name is Yogesh and my profession is Software Engineer
details.call(user2); // output - My name is Ankit and my profession is Ui/Ux Engineer

/*
Apply function example

1. apply function is similar as call function except that how to pass argument to function
2. apply() methods calls a function with a given this value and arguments provided as array or array-like object
3. call() accept positional argument list and apply() accept array of arguments
*/

var number = [20,31,54,67,89,07,64];

console.log(Math.max(number)); //this will give NaN because its not positional array and this function need positional arguments here comes the apply method role

var max = Math.max.apply(null, number); // now number will pass as positional arguments

console.log(max); //89