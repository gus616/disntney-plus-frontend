import React from 'react'


type NavbarItemProps = {
    link: {
        name: string;
        href: string;
        icon: React.ReactNode;
    }
}

const NavbarItem = ({ link }: NavbarItemProps) => {
    return (
        <li key={link.name} className="flex flex-row items-center space-x-2 gap-2 cursor-pointer  hover:underline">
            {link.icon}
            {link.name.toUpperCase()}
        </li>
    )
}

export default NavbarItem