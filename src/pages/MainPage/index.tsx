import { useState } from "react";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";
import { IoIosArrowBack } from "react-icons/io";

function MainPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    {/* 헤더 */}
      <Header 
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
         />
      <ItemList />
      <Nav />


      {/* Search Modal */}
      {isSearchOpen && (
        <div className='fixed inset-0 z-100 bg-white'>
          <div className="flex items-center gap-4 mx-4">
            <div 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className=" cursor-pointer">
              <IoIosArrowBack className="text-2xl" />
            </div>
              <div className="w-full p-3">
              <Searchbar />
              </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MainPage;
