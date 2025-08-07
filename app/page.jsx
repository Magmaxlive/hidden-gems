import Layout from "@/components/layout/Layout";
import Award1 from "@/components/sections/Award1";
import Blog2 from "@/components/sections/Blog2";
import Hero2 from "@/components/sections/Hero2";
import Partner1 from "@/components/sections/Partner1";
import Project1 from "@/components/sections/Project6";
import Service2 from "@/components/sections/Service2";
import Skill3 from "@/components/sections/Skill3"
import Hero1 from "@/components/sections/Hero1"
import Work from "@/components/sections/Work"

export default function Home() {
    return (<>
            <Layout headerStyle={2} footerStyle={2}>
                <Hero2 />
                <Work />
                {/* <Skill3 /> */}
                <Service2 />
                <Hero1 />
                <Project1 />
                {/* <Award1 />
                <Blog2 />
                <Partner1 /> */}
            </Layout>
        </>);
}
