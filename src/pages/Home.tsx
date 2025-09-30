import { useMemo } from "react"
import HeroCarrousel from "../components/HeroCarrousel"
import type { Movie } from "../models/Movie"
import CategoriesContainer from "../components/CategoriesContainer"
import Recommendations from "../components/Recommendations"


type HomeProps = {
    movies: Movie[] | undefined
}

const Home = ({ movies }: HomeProps) => {

    const recentMovies = useMemo(() => {
        if (!movies) return [];
        return movies.filter((movie) => new Date(movie.releaseDate) >= new Date('2025-01-01'));
    }, [movies]);

    return (
        <main className="bg-primary min-h-screen px-16 py-8">
            <HeroCarrousel movies={recentMovies} />
            <CategoriesContainer />
            <Recommendations />
        </main>
    )
}

export default Home