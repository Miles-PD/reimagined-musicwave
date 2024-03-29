// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Navbar"
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
    <div className="relative flex flex-col min-h-screen">

      <div className="flex-1 bg-[#191c1f] text-white ">
          <div className="fixed z-10">
            <Navbar />
          </div>
        <div className="mt-[120px] flex-1 flex-grow flex-shrink px-6 hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit ">
              <Routes>
                <Route path="/album/:id" element={ <AlbumListing /> } />
                <Route path="/artist/:name" element={ <Artist /> } />
                <Route path="/label/:label" element={ <Label /> } />
                <Route path="/genre/:genre" element={ <Genre /> } />
                <Route path="/categories" element={ <Category /> } />
                <Route path="/" element={ <Home /> } />
                
              </Routes>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
