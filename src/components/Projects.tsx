import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/data/cardInfo'

const Projects = () => {
    return (
        <div>
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

            <div className="mx-auto h-[50%] w-[85%] px-0 md:px-8">
                <HoverEffect items={projects} />
            </div>

        </div>
    )
}

export default Projects
