import Sidebar from "./components/Sidebar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Category from "./pages/Category";
import AlbumDetails from "./components/AlbumDetails";

//bg-gradient-to-br from-[#43018f] to-[#df1b1b]

function App() {

  return (
    <div className="relative flex">

      <Sidebar />

      <div className="flex-1 flex flex-col bg-black text-white"> 
      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<AlbumDetails />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
