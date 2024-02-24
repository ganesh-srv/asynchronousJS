async function fetchData() {
     const data = await fetchCatFacts()
    //  console.log(data)
     return data
}

function fetchCatFacts() {
    return fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;  // Optionally, you can return the data if needed for further processing
        });
}

console.log(fetchData())
