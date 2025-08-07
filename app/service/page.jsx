import Accordion from '@/components/elements/Accordion';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Service() {
    return (<>
        <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Our Services">
            <div>
                <section className="service-area-2 pt-120 pb-120">
                    <div className="container">
                        <div className="row gx-30 gy-30">
                            <div className="col-xl-6 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/3.jpg" alt="img" />
                                    </div>
                                    <h5 className="service-card-number">01</h5>
                                    <h4 className="service-card-title"><Link href="/about">Film & Photography Production</Link></h4>
                                    <p className="service-card-text">Craft meets camera. Content meets purpose.</p>
                                    <ul className="service-features">
                                        <li>Brand Films & Live-action Storytelling</li>
                                        <li>Event & Property Photography</li>
                                        <li>Executive Headshots & Portrait Suites</li>
                                        <li>Aerial/Drones & Location Shoots</li>
                                    </ul>
                                    <Link href="/about" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/4.jpg" alt="img" />
                                    </div>
                                    <h5 className="service-card-number">02</h5>
                                    <h4 className="service-card-title"><Link href="/about">Podcast Production & Audio Content</Link></h4>
                                    <p className="service-card-text">Say it loud. Let it resonate.</p>
                                    <ul className="service-features">
                                        <li>Full Podcast Series & One-Offs</li>
                                        <li>Audio Brand Messaging</li>
                                        <li>Editing, Mixing & Hosting Support</li>
                                        <li>Distribution Strategy for Reach & Engagement</li>
                                    </ul>
                                    <Link href="/about" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/2.jpg" alt="img" />
                                    </div>
                                    <h5 className="service-card-number">03</h5>
                                    <h4 className="service-card-title"><Link href="/about">Strategic Digital Amplification</Link></h4>
                                    <p className="service-card-text">Content is created—to be seen.</p>
                                    <ul className="service-features">
                                        <li>Digital Campaign Planning</li>
                                        <li>Social Content Repurposing</li>
                                        <li>Paid & Organic Amplification</li>
                                        <li>Lead Path & Conversion Tracking</li>
                                    </ul>
                                    <Link href="/about" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/1.jpg" alt="img" />
                                    </div>
                                    <h5 className="service-card-number">04</h5>
                                    <h4 className="service-card-title"><Link href="/about">Strategic Article Creation & Placement</Link></h4>
                                    <p className="service-card-text">Earned presence. Editorial impact.</p>
                                    <ul className="service-features">
                                        <li>Long-form Expertise & Thought Leadership</li>
                                        <li>Article Writing & Refinement</li>
                                        <li>Pitching to High-authority Platforms</li>
                                        <li>SEO & Backlink Strategy</li>
                                    </ul>
                                    <Link href="/about" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                        <h2 className="title text-white">INSIGHTS THAT DRIVE OUR WORK</h2>
                                        <p className="sec-text text-white">We don&apos;t just produce-we start with data, shape your message for the right channels, then amplify with precision and follow through.</p>

                                        <ul className="service-features" style={{color: "white", marginTop: "50px"}}>
                                            <li>70% of viewers form opinions of a brand after watching a 2-minute video</li>
                                            <li>Audio-first audiences spend 45% more time with on-demand content</li>
                                            <li>Edited-for-platform videos perform 60% better across social channels</li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="faq-area-2 pt-120 pb-120 gray-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </Layout>
    </>);
}