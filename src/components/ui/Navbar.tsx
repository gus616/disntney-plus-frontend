import { BiAddToQueue, BiAlbum, BiHome, BiMoviePlay, BiSearch } from "react-icons/bi"
import Logo from "../../../public/disney-plus-logo-white-update.f384bde4d5a7f1f455e2dc7d8d4348ae.png";
import { PiTelevision } from "react-icons/pi";
import { BsStar } from "react-icons/bs";
import NavbarList from "./NavbarList";
const Navbar = () => {

  const links = [
    {
      name: 'Home',
      href: '/',
      icon: <BiHome size={24} />
    },
    {
      name: 'Search',
      href: '/search',
      icon: <BiSearch size={24} />
    },
    {
      name: 'My List',
      href: '/mylist',
      icon: <BiAddToQueue size={24} />
    },
    {
      name: 'ESPN',
      href: '/espn',
      icon: <BiAlbum size={24} />
    },
    {
      name: 'Movies',
      href: '/movies',
      icon: <BiMoviePlay size={24} />
    },
    {
      name: 'Series',
      href: '/series',
      icon: <PiTelevision size={24} />
    },
    {
      name: 'Originals',
      href: '/originals',
      icon: <BsStar size={24} />
    }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full h-18 bg-black text-white font-bold flex flex-row items-center justify-between p-8 z-50 text-xs">
      <div className="flex items-center space-x-4 gap-10">
        <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
        <NavbarList links={links} />
      </div>
    </nav>
  )
}

export default Navbar