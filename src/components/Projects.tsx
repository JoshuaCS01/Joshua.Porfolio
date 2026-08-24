import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/data/cardInfo'

const Projects = () => {
    return (
        <section id='projects'>
            <div className="mx-auto mb-8 text-center text-white sm:mb-12">
                <div className="hidden sm:block">
                    <a href="https://github.com/JoshuaCS01">
                        <span className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] text-blue-600 underline">PROJECTS</span>
                    </a>
                    <span className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] text-white"> I HAVE WORKED ON</span>
                </div>



                <div className="sm:hidden">
                    <a href="https://github.com/JoshuaCS01">
                        <span className="font-display text-[clamp(1.75rem,7.5vw,2.375rem)] text-blue-600 underline">MY PROJECTS</span>
                    </a>
                </div>

            </div>

            <div className="mx-auto w-full">
                <HoverEffect items={projects} />
            </div>

        </section>
    )
}

export default Projects
