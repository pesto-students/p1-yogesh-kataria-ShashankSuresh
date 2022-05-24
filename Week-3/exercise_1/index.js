//Given reducer method:
function add(a, b) {
    return a + b
}

/*
memoize function
 -It takes the function multiply as its argument and its children accepts all the arg from add and We save the arguments in the form of string to the variable key and it is checked with the current arg if it matches the current arg then, the value strored at that key is returned else the args is sent to the reducer funtion
 to perform action and its key is stored in the cache

*/
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log('fn called with '+ key);
        console.log(cache);

        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

// for checking the time of function
function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling…
time(() => memoizeAdd(100, 100)); //returns 200
time(() => memoizeAdd(100)); //returns 100
time(() => memoizeAdd(100, 200)); //returns 300
time(() => memoizeAdd(100, 100)); //returns 200 without computing

