import Link from 'next/link';
export default function OffcanvasMenu({ isOffcanvasMenu, handleOffcanvasMenu }) {
    return (<>
            <div className={`offCanvas__info ${isOffcanvasMenu ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvasMenu}>
                    <button><i className="fas fa-times"/></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/icon.png" alt="Logo"/></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p> 1A/153 Stoddard RoadWesley,<br /> Auckland 1041, New Zealand</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p>+64 21 201 2117</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>hello@thehiddengems.co.nz</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <ul className="list-wrap">
                        {/* <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"/></Link></li> */}
                        <li><Link href="https://www.instagram.com/hiddengemsproductions/profilecard/?igsh=MWxuZzFnbW9mcmZ6eA==" target="_blank"><i className="fab fa-instagram"/></Link></li>
                    </ul>
                </div>
            </div>
            <div className={`offCanvas__overly  ${isOffcanvasMenu ? "active" : ""}`} onClick={handleOffcanvasMenu}/>
        </>);
}
