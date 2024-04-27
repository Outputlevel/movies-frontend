import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/UI/Card'
import Main from './Components/Layouts/Main'

import { getMovies } from './services/getMovies.js'

import Container from './Components/Layouts/Container'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
        try {
          // Assuming getMovies returns an array of movies
          const moviesData = await getMovies();
          console.log(moviesData)
          // Update the state with fetched movies
          setMovies(moviesData);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
      fetchMovies();
    }, []); // Empty dependency array to run only once

  return (
    <>
      <Container>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,350px))] gap-4">
        {movies.map(movie => (
          <Card key={movie.imdbid} title={movie.title} description={movie.description} image={movie.image} rating={movie.rating} genre={movie.genre} />
        ))}
        </div>
      </Container>
    </>
  )
}

export default App;
