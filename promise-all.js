// PromiseAll

async function simulateAsyncTasks() {
    // Step 1: Define an array of timeouts (simulating durations of asynchronous tasks)
    const calls = [{timer:700, id:"First call"}, {timer:2000, id:"Second call"}, {timer:500, id:"Third call"}, {timer:6000, id:"Fourth call"}];

    // Step 2: Use map to create an array of Promises (simulating asynchronous tasks)
    const promises = calls.map(call =>
        new Promise(resolve =>
            setTimeout(() =>{
                console.log(call.id) 
                resolve(call)
            }, call.timer)
        )
    );

    // Step 3: Use Promise.all to wait for all Promises to resolve
    const results = await Promise.all(promises);

    // Step 4: Now 'results' is an array containing the resolved values for each setTimeout
    console.log(results);
}

// Step 5: Call the function
simulateAsyncTasks();