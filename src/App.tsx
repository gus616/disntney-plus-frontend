import { Route, Routes } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import { useGetMoviesQuery } from './api/movieSlice';
import Spinner from './components/ui/Spinner';
import Error from './components/ui/Error';
function App() {
  const { data: movies, isLoading, isError } = useGetMoviesQuery();
  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
      </Routes>
    </>
  )
}

export default App
