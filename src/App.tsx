import Home from './pages/Home'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <nav className="p-4 flex items-center justify-between bg-gray-950/70 backdrop-blur-md">
          <h1 className="text-2xl font-bold text-blue-400">Disn'tney+</h1>
          <ul className="flex gap-4 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Movies</li>
            <li className="hover:text-white cursor-pointer">Series</li>
            <li className="hover:text-white cursor-pointer">Profile</li>
          </ul>
        </nav>
        <main className="p-6">
          <Home />
        </main>
      </div>
    </>
  )
}

export default App
