import Link from 'next/link';
export default function Footer4() {
    return (<>
            <footer>
                <div className="footer__area black2-bg">
                    <div className="container">
                        <div className="footer__cta-wrap3 pt-110 pb-110">
                            <div className="row gy-4 justify-content-lg-between align-items-center">
                                <div className="col-lg-auto">
                                    <h2 className="footer__cta-wrap-title text-white">Work with us</h2>
                                </div>
                                <div className="col-lg-auto">
                                    <div className="footer__cta-link text-xl-end">
                                        <Link className="link-btn text-white" href="mailto:work@Hidden Gems.co">work@Hidden Gems.co</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__top footer__top-four fix">
                            <div className="row justify-content-between">
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__links">
                                        <h4 className="footer__widget-title">Sitemap</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/project">Projects</Link></li>
                                                <li><Link href="/about">Approach</Link></li>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__links">
                                        <h4 className="footer__widget-title">Socials</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="https://www.instagram.com/">Instagram</Link></li>
                                                <li><Link href="https://www.linkedin.com/">LinkedIn</Link></li>
                                                <li><Link href="https://www.behance.com/">Behance</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__links">
                                        <h4 className="footer__widget-title">Useful Links</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact">Careers</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/project">Latest Projects</Link></li>
                                                <li><Link href="/project">Awarded portfolio</Link></li>
                                                <li><Link href="/faq">FAQ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__contact">
                                        <h4 className="footer__widget-title">GET IN TOUCH</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="mailto:hello@Hidden Gems">hello@Hidden Gems</Link></li>
                                                <li><Link href="/tel:323353333">+32 335 33 33</Link></li>
                                                <li>Stapelplein 70/303 <br />9000 Ghent</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer__bottom footer__bottom-four">
                            <div className="row gy-2 justify-content-center text-center">
                                <div className="col-xl-12">
                                    <div className="copyright-text">
                                        <p className="text-white">© 2024 Hidden Gems, All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>);
}
