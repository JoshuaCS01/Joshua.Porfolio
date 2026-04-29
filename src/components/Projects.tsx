import React from 'react'
import { GlobeDemo } from './ui/GridGlobe'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/data/cardInfo'

const Projects = () => {
    return (
        <section id='projects'>
            <div className=" mx-auto px-8 text-white text-center lg:mb-5 md:mb-5">

                <div className="hidden md:block">
                    <a href="https://github.com/JoshuaCS01">
                        <span className="1440p:text-7xl 1080p:text-5xl text-l underline font-bold font-body">PROJECTS</span>
                    </a>
                    <span className=" text-blue-600 1440p:text-7xl 1080p:text-5xl text-l " > I HAVE WORKED ON</span>
                </div>



                <div className="md:hidden">
                    <a href="https://github.com/JoshuaCS01">
                        <span className="md:text-7xl lg:text-7xl text-3xl underline font-bold font-body">MY PROJECTS</span>
                    </a>
                </div>

            </div>

            <div className=" mx-0 px-0 lg:px-8 md:px-8 lg:mx-auto md:mx-auto w-[85%] h-[50%]">
                <HoverEffect items={projects} />
            </div>

        </section>
    )
}

export default Projects
