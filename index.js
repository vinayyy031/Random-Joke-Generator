const button = document.querySelector('.but');
const jokeText = document.querySelector('.para');
document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',
   {
    headers:{
        'Accept':'application/json'
    }
   } );
   const jokeObject = await jokeData.json();
   jokeText.innerHTML = jokeObject.joke;
   //    console.log(jokeObject.joke);
}