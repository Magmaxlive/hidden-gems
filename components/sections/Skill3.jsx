import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Skill3() {
    return (<>
        <section className="skill-area-1 pt-120 pb-120 black-bg">
            <div className="container">
                <div className="row gy-40 align-items-center">
                    <div className="col-xl-5">
                        <div className="skill-thumb-box1 wow img-custom-anim-left">
                            <img src="/assets/img/others/skill3-1.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="skill-wrap1">
                            <div className="section__title mb-50 wow img-custom-anim-left">
                                <h2 className="title text-white">Unlock the Power of Creativity & Strategy</h2>
                                <p className="sec-text text-white">At Hidden Gems, we don’t just produce content—we create experiences that captivate, engage, and convert. With 10+ years of expertise, our team of creatives and strategists work together to help brands break through the noise and make a lasting impact.</p>
                            </div>
                            {/* <div className="skill-feature style3">
                                    <h3 className="skill-feature_title">BRANDING</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '90%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">90</span>%</div>
                                    </div>
                                </div>
                                <div className="skill-feature style3">
                                    <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '70%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">70</span>%</div>
                                    </div>
                                </div>
                                <div className="skill-feature style3">
                                    <h3 className="skill-feature_title">MARKETING</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '69%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">69</span>%</div>
                                    </div>
                                </div> */}

                            <div className="col-md-6">
                                <div className="service-list7-wrap" style={{ color: "white" }}>
                                    <h4 className="service-list7-title" style={{ color: "white" }}>Why Choose Us?</h4>
                                    <ul>
                                        <li><HiMiniArrowLongRight size={"40"} /> Data-Driven Creativity – Every idea is backed by strategy.</li>
                                        <li><HiMiniArrowLongRight size={"40"} /> Client-First Approach – Transparent, collaborative, and results-driven.</li>
                                        <li><HiMiniArrowLongRight size={"40"} /> Full-Service Solutions – From concept to execution, we handle it all.</li>
                                    </ul>
                                    <p style={{ color: "white" }}>💡 Your brand has potential. Let's unlock it.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
