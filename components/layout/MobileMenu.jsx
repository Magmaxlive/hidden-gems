'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export default function MobileMenu() {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    });
    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            });
        }
        else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (<>
        <ul className="navigation me-0">
           
            <li className={pathname == "/" ? "active" : ""}><Link href="/">HOME</Link></li>
            <li className={pathname == "/about" ? "active" : ""}><Link href="/about">ABOUT</Link></li>
            <li className={pathname == "/service" ? "active" : ""}><Link href="/service">SERVICES</Link></li>
            {/* <li className={pathname == "/project" ? "active" : ""}><Link href="/project">PORTFOLIO</Link></li> */}
            <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
        </ul>
    </>);
}
