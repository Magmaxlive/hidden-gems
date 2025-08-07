import Layout from "@/components/layout/Layout";
import Award2 from "@/components/sections/Award2";
import Blog3 from "@/components/sections/Blog3";
import Contact1 from "@/components/sections/Contact1";
import Counter1 from "@/components/sections/Counter1";
import Hero3 from "@/components/sections/Hero3";
import Partner2 from "@/components/sections/Partner2";
import Project2 from "@/components/sections/Project2";
import Service3 from "@/components/sections/Service3";
import Skill1 from "@/components/sections/Skill1";
export default function Home3() {
    return (<>

            <Layout headerStyle={3} footerStyle={2}>
                <Hero3 />
                <Partner2 />
                <Skill1 />
                <Service3 />
                <Counter1 />
                <Project2 />
                <Contact1 />
                <Award2 />
                <Blog3 />
            </Layout>
        </>);
}
