import Sidebar from "./components/Sidebar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Category from "./pages/Category";
import AlbumListing from "./pages/AlbumListing";
import Artist from "./pages/Artist";
import Label from "./pages/Label";
import Genre from "./pages/Genre";
import AuthModal from "./components/AuthModal";

function App() {

  return (
    <div className="relative flex">

      <Sidebar />

      <div className="flex-1 flex flex-col bg-black text-white"> 
      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/album/:id" element={ <AlbumListing /> } />
              <Route path="/artist/:name" element={ <Artist /> } />
              <Route path="/label/:label" element={ <Label /> } />
              <Route path="/genre/:genre" element={ <Genre /> } />
              <Route path="/categories" element={ <Category /> } />
              <Route path="/" element={ <AuthModal /> } />
              
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
