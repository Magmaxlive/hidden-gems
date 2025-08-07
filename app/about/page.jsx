import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function About() {
    return (<>

        <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="ABOUT US">
            <section className="pb-120 pt-120">
                <div className="overflow-hidden">
                    <div className="container">
                        <div className="row gy-40 justify-content-between">
                            <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                <div className="counter-box">
                                    <div className="counter-box_icon">
                                        <i className="icon-service-icon1" />
                                    </div>
                                    <h3 className="counter-box_title">Proven Storytelling Excellence</h3>
                                    <p className="counter-box_text"><span className="counter-number">200</span>+ projects delivered, from brand films to digital campaigns, crafting compelling stories across industries</p>
                                </div>
                            </div>
                            <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                <div className="counter-box">
                                    <div className="counter-box_icon">
                                        <i className="icon-service-icon2" />
                                    </div>
                                    <h3 className="counter-box_title">Trusted Industry Collaborations</h3>
                                    <p className="counter-box_text">Partnered with <span className="counter-number">50</span>+ real estate, tourism and enterprise clients throughout New Zealand and beyond</p>
                                </div>
                            </div>
                            <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                <div className="counter-box">
                                    <div className="counter-box_icon">
                                        <i className="icon-service-icon3" />
                                    </div>
                                    <h3 className="counter-box_title">Strategic Results Focus</h3>
                                    <p className="counter-box_text"><span className="counter-number">100</span>% of projects begin with measurable goals and deliver real impact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======== / Counter Section ========*/}
            {/*==============================
                Skill Area 01
                ==============================*/}
            <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                <div className="skill-area-bg-shape1 square-shape-wrap">
                    <div className="square-shape1" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
                <div className="container">
                    <div className="row gy-40 align-items-center">
                        <div className="col-xl-5">
                            <div className="skill-thumb-box1 wow img-custom-anim-left">
                                <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                <div className="square-shape-wrap">
                                    <div className="square-shape1" />
                                    <div className="square-shape2" />
                                    <div className="square-shape3" />
                                    <div className="square-shape4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="skill-wrap1">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title text-white"> Rooted in Creativity, Grounded in Strategy</h2>
                                    <p className="sec-text text-white">Hidden Gems Production is a New Zealand‑based creative agency and production studio. With a team spanning producers, directors, editors, digital strategists, and storytellers, we bring together high‑quality content and intelligent distribution to elevate your brand-online, on screen, and in the real world.</p>
                                    <p className="sec-text text-white">We partner with real estate, tourism, enterprise, and non‑profit clients to deliver authentic visuals and campaigns that are crafted to perform-starting with intention, finishing with measurable results.</p>
                                    <p className="sec-text text-white">Our commitment isn&apos;t to flash-we&apos;re committed to effectiveness. We surface hidden gems in your story, then back them with a digital plan that amplifies reach and influence.</p>

                                </div>

                                {/* <div className="skill-feature">
                                        <h3 className="skill-feature_title">BRANDING</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%' }}>
                                            </div>
                                            <div className="progress-value"><span className="counter-number">90</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '70%' }}>
                                            </div>
                                            <div className="progress-value"><span className="counter-number">70</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">MARKETING</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '69%' }}>
                                            </div>
                                            <div className="progress-value"><span className="counter-number">69</span>%</div>
                                        </div>
                                    </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======== / Skill Section ========*/}
            {/*==============================
Team Area
==============================*/}
            {/* <section className="pt-110 pb-120 position-relative">
                <div className="contact-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                    <div className="square-shape1" />
                    <div className="square-shape2" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
                <div className="container">
                    <div className="section__title text-center mb-50">
                        <h2 className="title wow img-custom-anim-top">Meet The Makers</h2>
                    </div>
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-1.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-2.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Souro Terry</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-3.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Stephen</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-4.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*======== / Team Section ========*/}
            {/*==============================
Award Area
==============================*/}
            <section className="about-values-area pt-110 pb-120 theme-bg">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section__title mb-50 wow img-custom-anim-left">
                                <h2 className="title">OUR STORY, YOUR VISION</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <ul className="values-wrap-area">
                                <li className="single-value-list">
                                    <div className="value-details">
                                        <h4><Link href="/about">The Hidden Gems Approach</Link></h4>
                                        <p>We dig deeper to uncover the unique stories within your brand that others miss, then craft them into compelling visual narratives</p>
                                    </div>
                                </li>
                                <li className="single-value-list">
                                    <div className="value-details">
                                        <h4><Link href="/about">End-to-End Storytelling</Link></h4>
                                        <p>From initial concept through final distribution, we handle every aspect of production to ensure your message reaches the right audience</p>
                                    </div>
                                </li>
                                <li className="single-value-list">
                                    <div className="value-details">
                                        <h4><Link href="/about">Strategy Meets Creativity</Link></h4>
                                        <p>Every frame we shoot serves both artistic vision and business objectives, creating content that&apos;s beautiful and effective</p>
                                    </div>
                                </li>
                                <li className="single-value-list">
                                    <div className="value-details">
                                        <h4><Link href="/about">The New Zealand Advantage</Link></h4>
                                        <p>Rooted in Aotearoa&apos;s stunning landscapes and innovative spirit, we bring global perspective with local authenticity</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*======== / Award Section ========*/}
            {/*==============================
                Contact Area
            ==============================*/}
            {/* <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                <div className="contact-thumb1 wow img-custom-anim-left">
                    <img src="/assets/img/others/contact1-1.jpg" alt="img" />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-lg-6">
                            <div className="contact-form-wrap">
                                <div className="section__title mb-60 wow img-custom-anim-left">
                                    <h2 className="title">GET IN TOUCH</h2>
                                    <p className="sec-text mt-3">Got a project you want to collaborate on? <br />
                                        Or just fancy a chat?
                                    </p>
                                </div>
                                <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                    <div className="row gy-35">
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                            <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-three square-btn mt-60">
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*======== / Contact Section ========*/}
            {/*==============================
                Marquee Area
                ==============================*/}
            {/* <div className="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg">
                <div className="slider__marquee clearfix marquee-wrap style3">
                    <Marquee className="marquee_mode marquee__group">
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-1.svg" alt="img" /></Link></div>
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-2.svg" alt="img" /></Link></div>
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-3.svg" alt="img" /></Link></div>
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-4.svg" alt="img" /></Link></div>
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-5.svg" alt="img" /></Link></div>
                        <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-6.svg" alt="img" /></Link></div>
                    </Marquee>
                </div>
            </div> */}
            {/*======== / Marquee Section ========*/}


        </Layout>
    </>);
}
