'use client'

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from "next/link";
import useWindowScroll from "@/hooks/useWindowScroll";

const Header = () => {

    const links = [
        { id: 0, link: "Home", href: '/' },
        { id: 1, link: "About", href: '/About' },
        { id: 2, link: "Services", href: '/Services' },
        { id: 3, link: "Portfolio", href: '/Portfolio' },
        { id: 4, link: "Careers", href: '/Careers' },
        { id: 5, link: "Contact", href: '/Contact' },
    ];
    const router = useRouter();

    // for header opacity animation
    const scrollY = useWindowScroll();
    const backgroundColor = `rgba(0,0,0,${scrollY / 500})`;

    // for mobile
    const [nav, setNav] = useState(false);

    let pathname = usePathname() || '/';
    const [activeLink, setActiveLink] = useState(links.find(link => link.href === pathname)?.id);

    const handleLinkClick = (id, href) => {
        setActiveLink(id);
        setNav(false);
        router.push(href);
    };

    return (
        <div className='header' style={{ backgroundColor }}>
            <Link href='/'>
                <Image
                    src={Logo}
                    alt={'Tech 23 Gaming Logo'}
                    width={80}
                    height={80}
                />
            </Link>
            <div className="navLinks">
                {links.map(({ id, link, href }) => (
                    <Link href={href} key={id}>
                        <motion.div
                            className='navLink'
                            whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }} // Scale up and change color on hover
                            whileTap={{ scale: 0.9 }} // Scale down on click
                            onClick={() => handleLinkClick(id, href)}
                            initial={{ borderBottom: "2px solid transparent" }} // Initial state of underline
                            animate={{ borderBottom: activeLink === id ? "2px solid white" : "2px solid transparent" }} // Animate underline
                        >
                            {link}
                        </motion.div>
                    </Link>
                ))}
            </div>
            <span style={{ width: '80px' }} />
        </div>
    )
}

export default Header