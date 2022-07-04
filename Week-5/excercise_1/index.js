function doTask(name, duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
            console.log(`${name} completed in ${duration} ms`);
        }, duration);
    });
}

const tasks = [
    doTask('task1', 1000),
    doTask('task2', 3000),
    doTask('task3', 2000),
];

async function parallel(tasks) {
    const result = await Promise.all(tasks);
    console.log(`${result} ran parallelly!`);
}

parallel(tasks);


/*
Example 2

const fetchData = () => {
    return Promise.resolve({
        id: 1,
        name: "Yogesh Kataria",
        username: "Yogi",
        email: "er.yogeshkataria@gmail.com"
       
    });
};

function* fetchDataWithGenerator() {
    yield fetchData().then((user) => {
        return user;
    });
}

const fetchDetails = fetchDataWithGenerator();
fetchDetails.next().value.then((user) => {
    console.log("Example of Generator");
    console.log(user);
});

async function fetchDataWithAsyncAwait() {
    const response = await fetchData();
    return response;
}
fetchDataWithAsyncAwait().then((user) => {
    console.log("Example of Async/Await");
    console.log(user);
});

*/