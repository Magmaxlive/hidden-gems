import Layout from "@/components/layout/Layout";
import Award3 from "@/components/sections/Award3";
import Blog6 from "@/components/sections/Blog6";
import Contact2 from "@/components/sections/Contact2";
import Hero6 from "@/components/sections/Hero6";
import Project5 from "@/components/sections/Project5";
import Service5 from "@/components/sections/Service5";
import Team2 from "@/components/sections/Team2";
export default function Home6() {
    return (<>
            <Layout headerStyle={5} footerStyle={4}>
                <Hero6 />
                <Service5 />
                <Project5 />
                <Award3 />
                <Team2 />
                <Contact2 />
                <Blog6 />
            </Layout>
        </>);
}
