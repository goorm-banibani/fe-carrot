import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscBell } from "react-icons/vsc";

const Header = ({isSearchOpen, setIsSearchOpen}: {
  isSearchOpen: boolean,
  setIsSearchOpen: (value: boolean) => void,
}) => {


  return (
    <div className='flex  justify-between p-5 gap-8 sticky top-0 bg-white'>
        <img src='logo.svg' className='w-28' />
        <div className='flex gap-4 '>
          <RxHamburgerMenu
            className='text-2xl font-bold' />
          <IoSearchOutline
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className='text-2xl' />
          <VscBell
            className='text-2xl' />
        </div>
    </div>
  )
}

export default Header
