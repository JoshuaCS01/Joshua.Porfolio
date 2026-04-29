import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe"
import { ImagesSlider } from "./images-slider";
import { motion } from "motion/react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 1080p:grid-rows-4 1440p:grid-rows-5  grid-rows-1 gap-4 1440p:gap-5 1080p:gap-2 mb-50 md:mb-0  lg:mb-0 w-[90%] mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

const images = [
  "../images/fountain1.jpg",
  "../images/band.jpg",
  "../images/santa.jpg"

];

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {
  return (
    <div
      className={cn(
        "group/bento w-full shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none relative overflow-hidden",
        className,
      )}

      style={{
        background: 'linear-gradient(116deg,rgba(36, 36, 36, 1) 0%, rgba(146, 168, 173, 0.3) 100%)'
      }}>
      <div className={cn(id === 6 && "flex justify-center h-full")}>

        {/* MAIN CONTAINER */}

        {/* IMAGE SLIDER BACKGROUND */}
        {img && (
          <div className="absolute inset-0 z-0 h-full">
            <ImagesSlider className="w-full " images={images}>
              <div />
            </ImagesSlider>
          </div>
        )}

        {/* TITLE + DESCRIPTION OVERLAY (YOUR ORIGINAL CONTENT) */}
        {id != 2 && (
          <div className={cn(
            titleClassName,
            "absolute bottom-0 left-0 z-20 flex flex-col justify-center px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200"
          )}>
            <div className="font-sans font-extralight text-neutral-300 lg:text-base md:text-xs text-sm">
              {description}
            </div>
            <div className="font-sans font-bold text-white text-lg lg:text-3xl max-w-96">
              {title}
            </div>
          </div>
        )}
        {id === 2 && (
          <div className={cn(
            titleClassName,
            "absolute top-0 left-0 z-20 flex flex-col justify-center px-5 pt-2 1080p:p-5 1440p:p-10 group-hover/bento:translate-x-2 transition duration-200"
          )}>
            <div className="font-sans font-bold text-white text-lg 1440p:text-3xl 1080p:text-xl">
              <h1 className= "mb-5">About Me</h1>
            </div>
            <div className="font-sans font-extralight text-neutral-300 1440p:text-2xl text-sm  1080p:text-lg text-justify">
              <p className= "1080p:mb-5 1440p:mb-10">I am a University of Georgia graduate with a Bachelors of Science in Computer Science. I chose computer science beacause I love creating things and have a strong drive to solve problems.
                I enjoy working on full-stack applications using Java, TypeScript, React, and REST APIs.
                I’m always looking for new things to build and ways to improve, and I enjoy turning ideas into applications as I continue growing as a software engineer.
              </p>
              <p className= "1080p:mb-5 1440p:mb-10">Outside of software development, I've got a couple interests and hobbies. I have a passion for music and I am a big enjoyer of College Football.
                This led me to play in my University's marching band to pursue that passion and support my favorite football team, The Georgia Bulldawgs (GO DAWGS!!).
              </p>
              <p>In my free time I spend a lot of time coding and building personal projects to solve problems I run into.
                I have made browser extensions to improve my workflow and Discord bots just to mess with my friends.
                Those projects, while they are small, help me stay creative while improving my coding skills.
                When Im not working on personal projects, I am usually playing guitar, watching movies, or playing video games.</p>
            </div>
          </div>
        )}

      </div>

      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>

        {id === 4 && (
          <div className="absolute inset-0 opacity-40 z-50">
            <GlobeDemo />
          </div>)}
      </div>
    </div >
  );
};
