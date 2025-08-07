import Layout from "@/components/layout/Layout";
import Blog4 from "@/components/sections/Blog4";
import Faq1 from "@/components/sections/Faq1";
import Hero4 from "@/components/sections/Hero4";
import Marquee1 from "@/components/sections/Marquee1";
import Partner3 from "@/components/sections/Partner3";
import Pricing from "@/components/sections/Pricing";
import Project3 from "@/components/sections/Project3";
import Service4 from "@/components/sections/Service4";
import Skill2 from "@/components/sections/Skill2";
export default function Home4() {
    return (<>
            <Layout headerStyle={4} footerStyle={3}>
                <Hero4 />
                <Service4 />
                <Marquee1 />
                <Skill2 />
                <Partner3 />
                <Project3 />
                <Pricing />
                <Faq1 />
                <Blog4 />
            </Layout>
        </>);
}
