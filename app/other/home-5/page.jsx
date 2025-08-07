import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Blog5 from "@/components/sections/Blog5";
import Hero5 from "@/components/sections/Hero5";
import Marquee4 from '@/components/sections/Marquee4';
import Project4 from "@/components/sections/Project4";
import Testimonial2 from "@/components/sections/Testimonial2";
import Video from "@/components/sections/Video";
export default function Home5() {
    return (<>
            <Layout headerStyle={5} footerStyle={4}>
                <Hero5 />
                <About1 />
                <Project4 />
                <Video />
                <Testimonial2 />
                <Blog5 />
                <Marquee4 />
            </Layout>
        </>);
}
