const counterElement = document.getElementById('visitor-count'); //gives counterElement the value of the span element belonging to "visitor-count" in the webpage. This is "locating the target".
const time = Date.now() // Date.now is number of ms elapsed since January 1, 1970

// Fetch uses GET by default, so we also specify POST below.
if (time - localStorage.getItem('storedTime') >= 8 * 60 * 60 * 1000) { //only update counter after 8 hours per visitor. This is to stop the counter from goping up by simply refreshing the page.
  fetch('https://cdwy7ezni1.execute-api.us-west-2.amazonaws.com', { method: 'POST'}) //fetches the API and returns a promise
      .then(response => response.json()) //result from the promise is used in the .then function to unwrap the json into a usable JS object
      .then(data => { const count = data.visits; counterElement.textContent = count; localStorage.setItem('count', count); localStorage.setItem('storedTime', time) }); //takes the response.json as data and adds the value of data.visits to constant count, then adds new value of count to counterElement.


      //every HTML element has a .textContent property. It represents the visible text inside the element.
} else {
  counterElement.textContent = localStorage.getItem('count');
}




