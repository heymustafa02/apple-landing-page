import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width cursor-pointer">
      <a href="/">
      <img src={appleImg} alt="Apple" width={14} height={18} />
      </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
  {navLists.map((nav, index) => (
    <a
      key={index}
      href={`/${nav.toLowerCase()}`}  // Example: dynamically creating links
      className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
    >
      {nav}
    </a>
  ))}
</div>


        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar