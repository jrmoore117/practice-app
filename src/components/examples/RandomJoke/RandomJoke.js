import React, { useState, useEffect } from 'react';

export const RandomJoke = () => {
   const [joke, setJoke] = useState(new Date());
   useEffect(() => {
      const getRandomJoke = async () => {
         try {         
            const result = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const jokeJSON = await result.json();
            setJoke(jokeJSON);
         } catch (err){
            console.error(err);
         }
      }
      getRandomJoke();
   },[]);
   return(
      <div>
         <h4>useEffect: Random Joke</h4>
         <p>{joke.setup}</p>
         <p>{joke.punchline}</p>
      </div>
   );
}