'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
const homeLinks = [
    { id: 1, name: 'Digital Agency', path: '/' },
    { id: 2, name: 'Creative Agency', path: '/home-2' },
    { id: 3, name: 'Design Studio', path: '/home-3' },
    { id: 4, name: 'Digital Marketing', path: '/home-4' },
    { id: 5, name: 'Modern Agency', path: '/home-5' },
    { id: 6, name: 'Creative Studio', path: '/home-6' },
    { id: 7, name: 'Startup Agency', path: '/home-7' },
    { id: 8, name: 'Personal Portfolio', path: '/home-8' },
];
const pageLinks = [
    { id: 1, name: 'About Us', path: '/about' },
    { id: 2, name: 'Service', path: '/service' },
    { id: 3, name: 'Service Details', path: '/service-details' },
    { id: 4, name: 'Our Team', path: '/team' },
    { id: 5, name: 'Team Details', path: '/team-details' },
    { id: 6, name: 'Pricing', path: '/pricing' },
    { id: 7, name: 'FAQ Page', path: '/faq' },
    { id: 8, name: '404 Error Page', path: '/error' },
];
const porfolioLinks = [
    { id: 1, name: 'Portfolio', path: '/project' },
    { id: 2, name: 'Portfolio Details', path: '/project-details' },
];
const blogLinks = [
    { id: 1, name: 'Blog', path: '/blog' },
    { id: 2, name: 'Blog Details', path: '/blog-details' },
];
export default function Menu({ menuLeft }) {
    const pathname = usePathname();
    const isActive = (path) => path === pathname;
    const isHomeLinkActive = () => {
        return homeLinks.some((link) => link.path === pathname) ? true : false;
    };
    const isPageLinkActive = () => {
        return pageLinks.some((link) => link.path === pathname) ? true : false;
    };
    const isPorfolioLinkActive = () => {
        return porfolioLinks.some((link) => link.path === pathname) ? true : false;
    };
    const isBlogLinkActive = () => {
        return blogLinks.some((link) => link.path === pathname) ? true : false;
    };
    return (<>
            <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"} `}>
                {/* <li className={`menu-item-has-children ${isHomeLinkActive() ? 'active' : ''}`}><Link href="/#">HOME</Link>
                    <ul className="sub-menu">
                        {homeLinks.map((link) => {
            return (<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link href={link.path}>
                                        {link.name}
                                    </Link>
                                </li>);
        })}
                    </ul>
                </li>
                <li className={`menu-item-has-children ${isPageLinkActive() ? 'active' : ''}`}><Link href="/#">PAGES</Link>
                    <ul className="sub-menu">
                        {pageLinks.map((link) => {
            return (<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link href={link.path}>
                                        {link.name}
                                    </Link>
                                </li>);
        })}
                    </ul>
                </li>
                <li className={`menu-item-has-children ${isPorfolioLinkActive() ? 'active' : ''}`}><Link href="/#">PORTFOLIO</Link>
                    <ul className="sub-menu">
                        {porfolioLinks.map((link) => {
            return (<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link href={link.path}>
                                        {link.name}
                                    </Link>
                                </li>);
        })}
                    </ul>
                </li>
                <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''}`}><Link href="/#">BLOG</Link>
                    <ul className="sub-menu">
                        {blogLinks.map((link) => {
            return (<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link href={link.path}>
                                        {link.name}
                                    </Link>
                                </li>);
        })}
                    </ul>
                </li> */}
                <li className={pathname == "/" ? "active" : ""}><Link href="/">HOME</Link></li>
                <li className={pathname == "/about" ? "active" : ""}><Link href="/about">ABOUT</Link></li>
                <li className={pathname == "/service" ? "active" : ""}><Link href="/service">SERVICES</Link></li>
                {/* <li className={pathname == "/project" ? "active" : ""}><Link href="/project">PORTFOLIO</Link></li> */}
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>);
}
