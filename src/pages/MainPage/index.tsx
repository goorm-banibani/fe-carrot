import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";
import Items from "../../mock/Item.json";
import DetailPage from "../DetailPage"; // 상세 페이지 import

function MainPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [items, setItems] = useState(Items);

  return (
    <div>
      {/* 헤더 */}
      <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

      {/* 라우팅 */}
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <>
              <ItemList items={items} />
              <Nav />
            </>
          }
        />
        {/* 상세 페이지 */}
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 bg-white">
          <div className="flex items-center gap-4 mx-4">
            <div className="w-full p-3">
              <Searchbar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
