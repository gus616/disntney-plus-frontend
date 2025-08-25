import React from 'react'
import NavbarItem from './NavbarItem';


type NavbarListProps = {
    links: {
        name: string;
        href: string;
        icon: React.ReactNode;
    }[]
}

const NavbarList = ({ links }: NavbarListProps) => {
    return (
        <ul className="flex flex-row space-x-6 gap-6">
            {links.map((link) => (
                <NavbarItem key={link.name} link={link} />
            ))}
        </ul>
    )
}

export default NavbarList