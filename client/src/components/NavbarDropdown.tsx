import { Link } from "react-router-dom";


export const genre_items = [
    { name: 'Test genre', to: '/tester',  },
    { name: 'Test genre2', to: '/tester',  },
    { name: 'Test genre3', to: '/tester',  },
]

const NavbarDropdown = () => {
    return (
        <>
            <ul className="absolute mt-11 list-none m-0 p-0">
                {genre_items.map((item, index) => (
                    <li className="m-0 p-[5px] inline-block text-m font-medium align-baseline float-none md:inline " key={index}>
                        <Link className="block w-full bg-slate-400" to={item.to}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavbarDropdown;