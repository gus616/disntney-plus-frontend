import { Route, Routes } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import { CgSpinner } from 'react-icons/cg';
import { useGetMoviesQuery } from './api/movieSlice';
function App() {

  const { data: movies, isLoading, isError } = useGetMoviesQuery();

  if (isLoading) return <CgSpinner className="animate-spin text-[15rem] text-cyan-400 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

  if (isError) return <div>Something went wrong</div>


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
