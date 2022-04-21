/* 
Its example of closure
we define a function with name of createIncrement
which have two inner function increment and log
*/
function createIncrement() {
    let count = 0;    // define count variable 

    function increment() {  // this function is increment the count
        count++;
    }

    let message = `Count is ${count}`;  // create message string

    function log() { 
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?


/*
Output will be "Count is 0"  because  when we called createIncrement that time
count value is 0 so, message variable got count value 0 and save as a string. moreover, we called increment function three times and its working fine and giving the output is 3 but nobody is telling message variable to assign new count value that's why we are getting "count is 0"

Example :

function createIncrement() {
    let count = 0; // define count variable 
    let message ;  //define message variable
    function increment() { // this function is increment the count
        count++;
        message = `Count is ${count}`; // now here we are assigning new count value
    }

    function log() {
        console.log(message);
    }
    return [increment, log];
}

*/