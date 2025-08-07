import Link from 'next/link';
export default function Footer3() {
    return (<>
            <footer>
                <div className="footer__area black-bg" data-background="assets/img/bg/footer-bg-4.jpg" style={{ backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="footer__cta-wrap2 pt-120">
                            <div className="row gy-4">
                                <div className="col-xl-8">
                                    <h2 className="footer__cta-wrap-title text-white">Tell Us About Your Project.</h2>
                                    <p className="footer__cta-wrap-text text-white">Let's collaborate and make great stuff.</p>
                                </div>
                                <div className="col-xl-4">
                                    <div className="footer__social2 text-xl-end">
                                        <ul className="list-wrap">
                                            <li className="footer__social2-title">Follow Us</li>
                                            <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"/></Link></li>
                                            <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"/></Link></li>
                                            <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"/></Link></li>
                                            <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__top footer__top-three fix">
                            <div className="row justify-content-between">
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__contact">
                                        <h4 className="footer__widget-title">Start a conversation</h4>
                                        <div className="footer__content">
                                            <p><Link href="mailto:work@Hidden Gemsdesign.com">work@Hidden Gemsdesign.com</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__contact">
                                        <h4 className="footer__widget-title">New business:</h4>
                                        <div className="footer__content">
                                            <p><Link href="/tel:15733434096">+1 573 343 4096</Link>
                                            </p>
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
                                    <div className="footer__widget footer__location">
                                        <h4 className="footer__widget-title">Address</h4>
                                        <div className="footer__content">
                                            <p>Las Vegas, NV, USA
                                                201 Spear Street,
                                                San Francisco, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer__bottom footer__bottom-three">
                            <div className="row gy-2 justify-content-xl-between align-items-center text-xl-start text-center">
                                <div className="col-xl-4">
                                    <div className="copyright-text">
                                        <p className="text-white">© {new Date().getFullYear()} Hidden Gems, All rights reserved.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto d-xl-block d-none">
                                    <button className="scroll__footer-top scroll-to-target open text-white" data-target="html">
                                        Back to top <i className="fas fa-arrow-up"/>
                                    </button>
                                </div>
                                <div className="col-xl-4">
                                    <div className="copyright-text text-xl-end">
                                        <p className="text-white">Built By <Link href="/">Hidden Gems</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>);
}
