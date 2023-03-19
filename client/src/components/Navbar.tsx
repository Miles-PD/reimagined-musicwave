import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiHome } from 'react-icons/tfi'
import { VscChromeClose } from 'react-icons/vsc'
import { HiOutlineMenu } from 'react-icons/hi'
import { CgMenuRight } from 'react-icons/cg'


import Logo from '../assets/icon.png'

interface IProps {
    handleClick?: () => void;
    onClick?: () => void;
    icon?: JSX.Element;
}


export const navbar_links = [
    { name: 'Home', to: '/', icon: TfiHome },
    { name: 'Test', to: '/test', icon: TfiHome }
]


const NavLinks: React.FC<IProps> = ({ handleClick }) => (
    <div className="mt-10">
        {navbar_links.map((link) => (
            <NavLink key={link.name}  to={link.to} onClick={() => handleClick && handleClick}>
                <div className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
                    <link.icon className="w-6 h-6 mr-2" />
                    {link.name}
                </div>
            </NavLink>
        ))}
    </div>
)


const Navbar = () => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <div className="block inset-x-0 top-0 md:flex w-screen h-[105px] bg-[#352768]">
                <div className="relative align-baseline pt-0 inner md:px-12 lg:px-24 xl:px-32">
                    
                </div>
                <img src={Logo} alt="logo" className="h-12 object-contain" />
                
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