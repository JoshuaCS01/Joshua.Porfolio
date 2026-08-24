import React from 'react'
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const cpp = "C++";

const SkillItem = ({ src, label }: { src: string; label: string }) => (
    <div className="flex w-auto flex-col items-center justify-center">
        <img src={src} alt="" className="size-7 object-contain lg:size-11" />
        <p className="mt-1 whitespace-nowrap text-[0.625rem] text-white lg:text-xs">{label}</p>
    </div>
);

const Skills = () => {
    return (
        <section id='skills'>
            <div className="mx-auto grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,38rem)] lg:gap-16">

                {/* LEFT SIDE (text) */}
                <div className="w-full text-white">
                    <h1 className="font-display mx-auto mb-8 w-fit text-center text-[clamp(1.75rem,4.2vw,3.75rem)] underline">MY SKILLS</h1>
                    <div className="mx-auto max-w-2xl space-y-6 break-words text-justify font-heading text-[clamp(0.9375rem,1.4vw,1.1875rem)] leading-[1.7] hyphens-auto">
                        <p>Through both my coursework and personal projects I have developed a strong skill set in front-end development.
                            My foundation is paved with HTML, CSS, JavaScript, and TypeScript and I frequently use React and Next.js for modern web applications.</p>

                        <p>My coursework has prepared me for team projects by giving me multiple opportunities to collaborate with other students on semester long projects.
                            This gave me experience working with version control systems, participating in code reviews, and dividing responsibilities.
                            These projects helped me strengthen my communication skills while learning how to integrate front-end and back-end features effectively in a shared codebase. </p>

                        <p> On the back-end side, I’ve worked with Java using Spring Boot and Node.js to build server-side applications and RESTful APIs.
                            I’ve also used MySQL, and Firebase to design and manage databases in projects that needed authentication and storage of user data.</p>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="relative mx-auto flex aspect-square w-full max-w-[38rem] items-center justify-center overflow-hidden">
                        <OrbitingCircles radius={240} >
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
                        <OrbitingCircles radius={110} reverse>
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


                    <div className="hidden sm:block lg:hidden">
                        <div className="relative mx-auto flex size-[430px] max-w-full items-center justify-center overflow-hidden">
                            <OrbitingCircles radius={175} >
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
                            <OrbitingCircles radius={78} reverse>
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

                    <div className="sm:hidden">
                        <div className="relative mx-auto flex size-[300px] max-w-full items-center justify-center overflow-visible">
                            <OrbitingCircles radius={128}>
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
                            <OrbitingCircles radius={58} reverse>
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
