import React from 'react'
import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const cpp = "C++";

const SkillItem = ({ src, label }: { src: string; label: string }) => (
    <div className="flex flex-col items-center justify-center w-100 h-100">
        <img src={src} className="lg:w-15 lg:h-15  md:w-15 md:h-15  w-7 h-7 object-contain" />
        <p className="text-white text-xs lg:text-base md:text-base mt-1 whitespace-nowrap ">{label}</p>
    </div>
);

const Skills = () => {
    return (
        <section id='skills'>
            <div className="flex flex-col  md:flex-row items-center justify-center md:gap-100 lg:gap-100  gap-0 h-200 lg:mb-50 md:mb-50 mb-0  lg:w-max mg:w-max w-auto mx-auto">

                {/* LEFT SIDE (text) */}
                <div className="w-full md:w-1/2 text-white ">
                    <h1 className="md:text-7xl lg:text-7xl text-3xl underline font-bold font-heading text-center mx-auto w-fit lg:mb-10 md:mb-10">MY SKILLS</h1>
                    <br></br>
                    <div className=" lg:text-xl  md:text-xl  text-xs font-head leading-relaxed font-heading space-y-6 max-w-2xl text-justify">
                        <p>Through both my coursework and personal projects I have developed a strong skill set in front-end development.
                            My foundation is paved with HTML, CSS, JavaScript, and TypeScript and I frequently use React and Next.js to for modern web applications.</p>

                        <p>My Coursework has prepared me for team projects by giving me multiple opportunities to collaborate with other students on semester long projects.
                            This gave me experience working with version control systems, participating in code reviews, and dividing responsibilities.
                            These projects helped me strengthen my communication skills while learning how to integrate front-end and back-end features effectively in a shared codebase. </p>

                        <p> On the back-end side, I’ve worked with Java using Spring Boot and Node.js to build server-side applications and RESTful APIs.
                            I’ve also used MySQL, and Firebase to design and manage databases in projects that needed authentication and storage of user data.</p>

                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center overflow-visible">
                        <OrbitingCircles radius={350} >
                            <SkillItem src="/icons/nodejs/nodejs-plain-wordmark.svg" label="Node.js" />
                            <SkillItem src="/icons/nextjs/nextjs-original.svg" label="Next.js" />
                            <SkillItem src="/icons/git/git-original.svg" label="Git" />
                            <SkillItem src="/icons/linux/linux-original.svg" label="Linux" />
                            <SkillItem src="/icons/mysql/mysql-original.svg" label="MySQL" />
                            <SkillItem src="/icons/mongodb/mongodb-original.svg" label="MongoDB" />
                            <SkillItem src="/icons/figma/figma-original.svg" label="Figma" />
                            <SkillItem src="/icons/tailwindcss/tailwindcss-original.svg" label="Tailwind" />
                            <SkillItem src="/icons/android/android-original.svg" label="AndroidStudio" />

                        </OrbitingCircles>
                        <OrbitingCircles radius={150} reverse>
                            <SkillItem src="/icons/java/java-original.svg" label="Java" />
                            <SkillItem src="/icons/c/c-original.svg" label="C" />
                            <SkillItem src="/icons/cplusplus/cplusplus-original.svg" label={cpp} />
                            <SkillItem src="/icons/html5/html5-original.svg" label="HTML5" />
                            <SkillItem src="/icons/css3/css3-original.svg" label="CSS3" />
                            <SkillItem src="/icons/javascript/javascript-original.svg" label="JavaScript" />
                            <SkillItem src="/icons/typescript/typescript-original.svg" label="TypeScript" />
                            <SkillItem src="/icons/react/react-original.svg" label="React" />
                        </OrbitingCircles>
                    </div>
                    </div>


                    <div className="md:hidden">
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center overflow-visible">
                            <OrbitingCircles radius={150} >
                                <SkillItem src="/icons/nodejs/nodejs-plain-wordmark.svg" label="Node.js" />
                                <SkillItem src="/icons/nextjs/nextjs-original.svg" label="Next.js" />
                                <SkillItem src="/icons/git/git-original.svg" label="Git" />
                                <SkillItem src="/icons/linux/linux-original.svg" label="Linux" />
                                <SkillItem src="/icons/mysql/mysql-original.svg" label="MySQL" />
                                <SkillItem src="/icons/mongodb/mongodb-original.svg" label="MongoDB" />
                                <SkillItem src="/icons/figma/figma-original.svg" label="Figma" />
                                <SkillItem src="/icons/tailwindcss/tailwindcss-original.svg" label="Tailwind" />
                                <SkillItem src="/icons/android/android-original.svg" label="AndroidStudio" />

                            </OrbitingCircles>
                            <OrbitingCircles radius={75} reverse>
                                <SkillItem src="/icons/java/java-original.svg" label="Java" />
                                <SkillItem src="/icons/c/c-original.svg" label="C" />
                                <SkillItem src="/icons/cplusplus/cplusplus-original.svg" label={cpp} />
                                <SkillItem src="/icons/html5/html5-original.svg" label="HTML5" />
                                <SkillItem src="/icons/css3/css3-original.svg" label="CSS3" />
                                <SkillItem src="/icons/javascript/javascript-original.svg" label="JavaScript" />
                                <SkillItem src="/icons/typescript/typescript-original.svg" label="TypeScript" />
                                <SkillItem src="/icons/react/react-original.svg" label="React" />


                            </OrbitingCircles>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills