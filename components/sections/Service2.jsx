import Link from "next/link";

export default function Service2() {
    return (<>
            <section className="service-area-2 pt-120 pb-120">
                <div className="section__title section__title-two text-lg-start text-center">
                    <div className="container-fluid">
                        <div className="row gx-0">
                            <div className="col-xl-2 col-lg-3">
                                <h6 className="sub-title wow img-custom-anim-left">SERVICES</h6>
                            </div>
                            <div className="col-xl-6 col-lg-9">
                                <h2 className="title wow img-custom-anim-left">Featured Services Snapshot</h2>
                                <p className="service-card-text">We combine storytelling, technology, and strategy to craft solutions that work.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-0 service-card-wrap">
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="https://img.freepik.com/free-photo/man-filming-with-professional-camera-new-movie_23-2149066401.jpg" alt="img"/>
                                </div>
                                <h5 className="service-card-number">01</h5>
                                <h4 className="service-card-title"><Link href="/about">Film & Event Coverage</Link></h4>
                                <p className="service-card-text">Tell your story with authenticity and polish.</p>
                                <Link href="/about" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="https://img.freepik.com/free-photo/professional-indian-young-photographer-taking-photos-studio-with-leight_231208-3784.jpg" alt="img"/>
                                </div>
                                <h5 className="service-card-number">02</h5>
                                <h4 className="service-card-title"><Link href="/about">Executive Photography</Link></h4>
                                <p className="service-card-text">Build a strong personal or brand presence</p>
                                <Link href="/about" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="https://img.freepik.com/free-photo/man-working-radio-station-high-angle_23-2148802326.jpg" alt="img"/>
                                </div>
                                <h5 className="service-card-number">03</h5>
                                <h4 className="service-card-title"><Link href="/about">Podcast Production</Link></h4>
                                <p className="service-card-text">Echoes dancing where mountains are</p>
                                <Link href="/about" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="https://img.freepik.com/free-photo/business-people-working-with-ai-operated-devices_23-2151922462.jpg" alt="img"/>
                                </div>
                                <h5 className="service-card-number">04</h5>
                                <h4 className="service-card-title"><Link href="/about">Digital Content Strategy</Link></h4>
                                <p className="service-card-text">Reach the right audience, the right way</p>
                                <Link href="/about" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}
