//import api key from config.js file
import { myApiKey } from "./config.js"; 

//function for API to fetch the data
async function fetchData() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': myApiKey,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `<p>"${result.content}" - <b>${result.originator.name}<b/></p>`;
    } catch (error) {
        console.error(error);
    }
}

fetchData();


