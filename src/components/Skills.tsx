import React from 'react'
import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const cpp = "C++";

const SkillItem = ({ src, label }: { src: string; label: string }) => (
    <div className="flex flex-col items-center justify-center w-100 h-100">
        <img src={src} className="w-15 h-15 object-contain" />
        <p className="text-white text-base mt-1 whitespace-nowrap ">{label}</p>
    </div>
);

const Skills = () => {
    return (
        <section id='skills'>
            <div className="flex flex-col  md:flex-row items-center justify-between gap-100 h-200 lg:mb-50 w-max mx-auto">

                {/* LEFT SIDE (text) */}
                <div className="w-full md:w-1/2 text-white ">
                    <h1 className="md:text-7xl lg:text-7xl text-3xl underline font-bold font-heading text-center mx-auto w-fit">MY SKILLS</h1>

                    <br></br>
                    <br></br>
                    <div className="text-base leading-relaxed font-heading space-y-6 max-w-2xl text-justify">
                    <p className="text-base leading-relaxed fnt-heading">I have developed strong front-end development skills through both coursework and personal projects, working with technologies such as HTML, CSS, JavaScript, and TypeScript. I frequently use React and Next.js to build modern, component-based web applications, and Tailwind CSS to create responsive and consistent user interfaces. In class projects, I applied these tools to design interactive UIs and improve user experience, focusing on clean layouts, reusable components, and responsive design across different screen sizes. </p>
                    <p className="text-base leading-relaxed font-heading">Throughout my computer science courses, I’ve had multiple opportunities to collaborate with other students on team-based projects. In these environments, I gained experience working with version control systems like Git, participating in code reviews, and dividing responsibilities across the full stack. These collaborations helped me strengthen my communication skills while learning how to integrate front-end and back-end features effectively in a shared codebase. </p>
                    <p className="text-base leading-relaxed font-heading">On the back-end side, I’ve worked with Java using Spring Boot as well as Node.js to build server-side applications and RESTful APIs. I’ve also used MySQL and MongoDB to design and manage databases, focusing on data modeling, queries, and secure data handling. In coursework projects, I implemented authentication systems and connected front-end interfaces to back-end services, giving me a deeper understanding of how full-stack applications function end-to-end. </p>
                    <p className="text-base leading-relaxed font-heading">In addition to classroom experience, I also participated in a hackathon where I worked in a fast-paced team environment to build a functional prototype within a limited time frame. During this event, I collaborated with teammates to integrate APIs, design UI components, and quickly iterate on features based on feedback. This experience strengthened my ability to adapt quickly, solve problems under pressure, and contribute effectively in a team setting while building a working software product. </p>
                </div>
            </div>
            <div className="relative w-[500px] h-[500px] flex items-center justify-center overflow-visible">
                <OrbitingCircles>
                    <SkillItem src="/icons/Java/Java-original.svg" label="Java" />
                    <SkillItem src="/icons/C/C-original.svg" label="C" />
                    <SkillItem src="/icons/Cplusplus/Cplusplus-original.svg" label={cpp} />
                    <SkillItem src="/icons/html5/html5-original.svg" label="HTML5" />
                    <SkillItem src="/icons/css3/css3-original.svg" label="CSS3" />
                    <SkillItem src="/icons/javascript/javascript-original.svg" label="JavaScript" />
                    <SkillItem src="/icons/typescript/typescript-original.svg" label="TypeScript" />
                    <SkillItem src="/icons/react/react-original.svg" label="React" />
                    <SkillItem src="/icons/TailwindCSS/TailwindCSS-original.svg" label="Tailwind" />
                    <SkillItem src="/icons/Android/Android-original.svg" label="AndroidStudio" />

                </OrbitingCircles>
                <OrbitingCircles radius={150} reverse>
                    <SkillItem src="/icons/nodejs/nodejs-plain-wordmark.svg" label="Node.js" />
                    <SkillItem src="/icons/nextjs/nextjs-original.svg" label="Next.js" />
                    <SkillItem src="/icons/git/git-original.svg" label="Git" />
                    <SkillItem src="/icons/linux/linux-original.svg" label="Linux" />
                    <SkillItem src="/icons/MySQL/MySQL-original.svg" label="MySQL" />
                    <SkillItem src="/icons/MongoDB/MongoDB-original.svg" label="MongoDB" />
                    <SkillItem src="/icons/figma/figma-original.svg" label="Figma" />

                </OrbitingCircles>
            </div>
        </div>
        </section >
    )
}

export default Skills