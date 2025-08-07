import Link from "next/link";
export default function Hero1() {
    return (<>

        <section className="hero-wrapper hero-1">
            <div className="container">
                <div className="hero-style1">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s"><span className="text-theme">What Makes
                            </span>&nbsp;Us Different</h1>
                        </div>
                        <div className="col-lg-4 align-self-end">
                            <p className="hero-text wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">We don&apos;t just produce and deliver. We help brands.</p>
                        </div>
                    </div>

                    <div className="tg-button-wrap">
                        <Link href="/about" className="btn border-white wow img-custom-anim-right">
                            Find clarity in messaging
                        </Link>
                        <Link href="/about" className="btn border-white wow img-custom-anim-right">
                           Match medium to mission
                        </Link>
                        <Link href="/about" className="btn border-white wow img-custom-anim-right">
                           Create once, and distribute wisely
                        </Link>
                    </div>
                    <div className="hero-thumb1 wow img-custom-anim-top position-relative">
                        <div className="thumb">
                            <img src="/assets/img/home/5.png" alt="hero" />
                        </div>
                        <Link className="btn big-circle-btn gsap-magnetic" href="/about"><i className="icon-arrow-top-left" /></Link>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
