import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";
import { IoIosArrowBack } from "react-icons/io";
import Items from '../../mock/Item.json';

function MainPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [items, setItems] = useState(Items);


  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch('https://04ef-222-232-44-239.ngrok-free.app/articles', {
          method: 'GET',
          headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': 'true', 
          }
        });

        if(!res.ok) {
          console.log('HTTP 에러')

        }

        const data = await res.json();
        console.log(data);

        setItems(data);

      } catch (error) {
        console.error(error);
      }
    }
  
    getItems()
  }, [])
  


  return (
    <>
    {/* 헤더 */}
      <Header 
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
         />
         {/* fetching failed 시 */}
      <ItemList items={items} />
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
