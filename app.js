

/*  
function displayAlphabet() {
    const upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    const myalpha = upperCase.split('');
    const alpha_array = [...myalpha]
    const alphabet = document.querySelector('.alphabet');
    const html = alpha_array.map(letter => {
        return`
            <div class="alpha_layout">
                <li><a href="#"><span>${letter}</span></a></li>
            </div>        
        `;

    })
    
      
    alphabet.innerHTML = html;
}
displayAlphabet()
*/
let cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

console.log(cities)

/*
let chordShapes = [];
const guitarChords = 'http://pargitaru.id.lv/api/';
fetch(guitarChords)
.then(blob => blob.json())
.then(data => guitarChords.push(...data));
*/
const api_url = "https://randomuser.me/api/";
async function getUser() {
    
    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);
    
    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.results);
    
}

getUser();
/*
  
  let axios = requires('axios');
  
  const options = {
      method: 'GET',
      url: 'https://royalty-music-net-free-sheet-music-websites.p.rapidapi.com/royaltymusic.net',
      headers: {
          'X-RapidAPI-Key': 'a6defb7e05msh669d810d74c48e0p114a1ajsn501cd7cb0c10',
          'X-RapidAPI-Host': 'royalty-music-net-free-sheet-music-websites.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
    */


