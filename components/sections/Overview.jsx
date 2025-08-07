import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Overview() {
    return (<>
            <section className="overview-area pt-110 black-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="section__title mb-40 wow img-custom-anim-left">
                                <h2 className="title text-white">Our Work Speaks for Itself</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-between">
                        <div className="col-lg-6">
                            <div className="section__title mb-75 me-xxl-5 wow img-custom-anim-left">
                                <p className="sec-text text-white mt-0">From startups to global brands, we’ve helped businesses create meaningful connections with their audience. </p>
                            </div>
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
                            {/* <div className="counter-card wow img-custom-anim-left">
                                <h2 className="counter-card-number">01</h2>
                                <h3 className="counter-card-title"><span className="counter-number">20</span>+ years of experience</h3>
                            </div>
                            <div className="counter-card wow img-custom-anim-left">
                                <h2 className="counter-card-number">02</h2>
                                <h3 className="counter-card-title"><span className="counter-number">150</span>+ projects</h3>
                            </div>
                            <div className="counter-card wow img-custom-anim-left">
                                <h2 className="counter-card-number">03</h2>
                                <h3 className="counter-card-title"><span className="counter-number">35</span> Team Members</h3>
                            </div> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-thumb1-1 wow img-custom-anim-right">
                                <img src="/assets/img/others/overview-thumb1-1.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}
