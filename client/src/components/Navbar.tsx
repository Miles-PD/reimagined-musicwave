import { useState } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { TfiHome } from 'react-icons/tfi'
import { VscChromeClose } from 'react-icons/vsc'
import { HiOutlineMenu } from 'react-icons/hi'
import { CgMenuRight, CgChevronDown } from 'react-icons/cg'


import Logo from '../assets/icon.png'
import NavbarDropdown from "./NavbarDropdown";

interface IProps {
    handleClick?: () => void;
    onClick?: () => void;
    icon?: JSX.Element;
}


export const navbar_links = [
    { name: 'Homeiswhern', to: '/',  },
    { name: 'Genres', to: '/test' }
]


const NavLinks: React.FC<IProps> = ({ handleClick }) => {

    const [dropdown, setDropdown] = useState(false); 

    


    const displayDropdown = () => {
        
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const disappearDropdown = () => {
        
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    
    return (

    <div className="block relative my-0">
        {navbar_links.map((link) => (
            <NavLink key={link.name} to={link.to} onClick={() => handleClick && handleClick}>
                <div onMouseEnter={displayDropdown} onMouseLeave={disappearDropdown} className=" m-0 p-[5px] hover:bg-rose-800 float-left aline-baseline inline-block text-m font-medium text-gray-400 hover:text-cyan-400">
                    <div className="px-5 float-left">
                        {link.name}
                    </div>
                    <div className="float-left block align-middle p-1">
                        <CgChevronDown />
                    </div>
                    {dropdown && <NavbarDropdown />}
                </div>
            </NavLink>
        ))}
    </div>
)}


const Navbar = () => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <div className="block inset-x-0 top-0 md:flex flex-col w-screen h-[102px] bg-[#352768]">
                <div className="relative align-baseline pt-0 inner md:px-12 lg:px-24 xl:px-20">
                    <img src={Logo} alt="logo" className="h-12 object-contain" />
                </div>
           

                <div className="relative align-baseline pt-0 inner md:px-12 lg:px-24 xl:px-20">
                    <div className="w-full">
                        <div className="relative block">
                            <NavLinks />
                        </div>
                        <div className="float-right">
                            <Searchbar />
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute md:hidden block top-6 right-3">
                { !mobileMenuOpen ? (
                    <HiOutlineMenu className="w-6 h-6 mr-2 text-black" onClick={() => setMobileMenuOpen(true)} />) 
                    : (
                    <VscChromeClose className="w-6 h-6 mr-2 text-black" onClick={() => setMobileMenuOpen(false)} />) }   
            </div>

            <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <img src={Logo} alt="logo" className="w-full h-14 object-contain" />
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    )
}

export default Navbar;