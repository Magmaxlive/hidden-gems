import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import OffcanvasMenu from '../OffcanvasMenu';
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffcanvasMenu, handleOffcanvasMenu }) {
    return (<>
        <header>
            <div id="sticky-header" className={`tg-header__area transparent-header tg-header__area-two ${scroll ? "sticky-menu" : ""}`}>
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tgmenu__wrap">
                                <nav className="tgmenu__nav">
                                    <div className="logo">
                                        <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                        <Menu />
                                    </div>
                                    <div className="tgmenu__action d-none d-md-block">
                                        <ul className="list-wrap">
                                            <li className="offCanvas-menu" onClick={handleOffcanvasMenu}>
                                                <a className="menu-tigger sidebar-btn">
                                                    <span className="line" />
                                                    <span className="line" />
                                                    <span className="line" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                        <a className="sidebar-btn">
                                            <span className="line" />
                                            <span className="line" />
                                            <span className="line" />
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu  */}
            <div className="tgmobile__menu">
                <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                    <div className="nav-logo">
                        <Link href="/"><img src="/assets/img/logo/icon.png" alt="Logo" /></Link>
                    </div>
                    {/* <div className="tgmobile__search">
                        <form action="#">
                            <input type="text" placeholder="Search here..." />
                            <button><i className="fas fa-search" /></button>
                        </form>
                    </div> */}
                    <div className="tgmobile__menu-outer">
                        <MobileMenu />
                    </div>
                    <div className="tgmobile__menu-bottom">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li><Link href="mailto:info@Hidden Gems.com">hello@thehiddengems.co.nz</Link></li>
                                <li><Link href="/tel:0123456789">+64 21 201 2117</Link></li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <ul className="list-wrap">
                                {/* <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"/></Link></li> */}
                                <li><Link href="https://www.instagram.com/hiddengemsproductions/profilecard/?igsh=MWxuZzFnbW9mcmZ6eA==" target="_blank"><i className="fab fa-instagram" /></Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="tgmobile__menu-backdrop" />
            {/* End Mobile Menu */}
            {/* offCanvas-menu */}
            <OffcanvasMenu isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />
            {/* offCanvas-menu-end */}
        </header>


    </>);
}
