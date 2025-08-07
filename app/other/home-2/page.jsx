import Layout from "@/components/layout/Layout";
import Award1 from "@/components/sections/Award1";
import Blog2 from "@/components/sections/Blog2";
import Hero2 from "@/components/sections/Hero2";
import Overview from "@/components/sections/Overview";
import Partner1 from "@/components/sections/Partner1";
import Project1 from "@/components/sections/Project1";
import Service2 from "@/components/sections/Service2";
export default function Home2() {
    return (<>
            <Layout headerStyle={2} footerStyle={2}>
                <Hero2 />
                <Service2 />
                <Overview />
                <Project1 />
                <Award1 />
                <Blog2 />
                <Partner1 />
            </Layout>
        </>);
}
