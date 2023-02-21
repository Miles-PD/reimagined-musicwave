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


export const sidebar_links = [
    { name: 'Home', to: '/', icon: TfiHome },
    { name: 'Test', to: '/test', icon: TfiHome }
]


const NavLinks: React.FC<IProps> = ({ handleClick }) => (
    <div className="mt-10">
        {sidebar_links.map((link) => (
            <NavLink key={link.name}  to={link.to} onClick={() => handleClick && handleClick}>
                <div className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
                    <link.icon className="w-6 h-6 mr-2" />
                    {link.name}
                </div>
            </NavLink>
        ))}
    </div>
)


const Sidebar = () => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
                <img src={Logo} alt="logo" className="w-full h-14 object-contain" />
                <NavLinks />
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

export default Sidebar;