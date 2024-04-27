export async function getMovies() {
    try {
        //const response = await fetch(`${import.meta.env.VITE_API_URL}/api/movies`);
        const response = await fetch("https://api.outputlevel.com/api/movies");
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const movies = await response.json();
        return movies.payload;
    } catch (error) {
        console.error(error);
        return [];
    }
}