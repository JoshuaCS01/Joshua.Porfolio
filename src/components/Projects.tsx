import React from 'react'
import { GlobeDemo } from './ui/GridGlobe'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/data/cardInfo'

const Projects = () => {
    return (
        <section id='projects'>
            <div className=" mx-auto px-8 text-white text-center">
                <a href="https://github.com/JoshuaCS01">
                 <span className="md:text-7xl lg:text-7xl text-3xl underline font-bold font-body">PROJECTS</span>
                 </a>
                 <span className= " text-blue-600 md:text-7xl lg:text-7xl text-3xl" > I HAVE WORKED ON</span>
                <br />
            </div>

            <div className="max-w-8xl mx-0 px-0 lg:px-8 md:px-8 lg:mx-auto md:mx-auto">
                <HoverEffect items={projects} />
            </div>

        </section>
    )
}

export default Projects
