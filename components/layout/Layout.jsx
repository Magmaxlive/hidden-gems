'use client';
import AOS from 'aos';
import { useEffect, useState } from "react";
import AddClassBody from '../elements/AddClassBody';
import BackToTop from '../elements/BackToTop';
import DataBg from '../elements/DataBg';
import MagnetsComponent from '../elements/MagnetsComponent';
import Breadcrumb from './Breadcrumb';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Header5 from './header/Header5';
import Header6 from './header/Header6';
import Header7 from './header/Header7';
import Header8 from './header/Header8';
export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    const [isOffcanvasMenu, setOffcanvasMenu] = useState(false);
    const handleOffcanvasMenu = () => {
        setOffcanvasMenu(!isOffcanvasMenu);
    };
    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        // Initialize WOW.js
        window.wow.init();
        AOS.init();
        const onScroll = () => {
            setScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<>
            {!headerStyle && <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/>}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 6 ? <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 7 ? <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {headerStyle == 8 ? <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu}/> : null}
            {/* <MobileMenu /> */}
            <DataBg />
            <MagnetsComponent />
            <AddClassBody />

            <main className="fix" id='top'>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle}/>}

                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}
            {footerStyle == 2 ? <Footer2 /> : null}
            {footerStyle == 3 ? <Footer3 /> : null}
            {footerStyle == 4 ? <Footer4 /> : null}

            {/* <BackToTop target="#top"/> */}
        </>);
}
