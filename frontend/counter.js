const counterElement = document.getElementById('visitor-count'); //gives counterElement the value of the id belonging to "visitor-count" in the webpage (the <span> element itself). This is "locating the target"

fetch('https://somethingamazon') //fetches the API and returns a promise
    .then(response => response.json()) //result from the promise is used in the .then function to unwrap the json into a usable JS object
    .then(data => { const count = data.visits; counterElement.textContent = count; }); //takes the response.json as data and adds the value of data.visits to constant count

    //every HTML element has a .textContent property. It represents the visible text inside the element.



