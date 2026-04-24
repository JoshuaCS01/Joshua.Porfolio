import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 md:grid-rows-5  grid-rows-1 gap-4 lg:gap-5 lg:mx-75 md:mx-75 mb-50 md:mb-0  lg:mb-0  ",
        className,
      )}
    >
      {children}
    </div>
  );
};

const images = [
  "../images/temptest.jpg",
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
        id === 1 && "h-75 md:h-auto",
        id === 2 && "h-200 md:h-auto",
        id === 3 && "h-[300px] md:h-auto",
        id === 4 && "h-40 md:h-auto" 
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

        {/* DARK OVERLAY (for readability) */}
        {img && (
          <div className="absolute z-10 bg-black/70" />
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
            "absolute top-0 left-0 z-20 flex flex-col justify-center px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200"
          )}>
            <div className="font-sans font-bold text-white text-lg lg:text-3xl">
              <h1>About Me</h1>
              <br></br>
            </div>
            <div className="font-sans font-extralight text-neutral-300 lg:text-2xl md:text-xs text-sm text-justify">
              <p>I am a Computer Science graduate passionate about building reliable and scalable software solutions. I enjoy working on full-stack applications using technologies like Java, TypeScript, React, and REST APIs, with a strong focus on debugging, system reliability, and writing clean, maintainable code. Through academic and personal projects, I’ve gained experience developing web and mobile applications, working with databases, and designing backend systems.</p>
              <br></br>
              <p>Outside of software development, I’m someone who enjoys both technical and creative hobbies. I played college marching band, which taught me discipline, teamwork, and consistency while performing in front of large audiences. I’m also a big fan of college football (GO DAWGS!) and I enjoy following games and the overall energy of the sport.</p>
              <br></br>
              <p>In my free time, I enjoy playing guitar, watching movies, and playing video games, but I also spend a lot of time coding and building personal projects. I like creating programs that solve problems I run into, including building browser extensions to improve my own workflow and even a Discord bot just to mess with my friends. These projects help me stay creative while sharpening my problem-solving skills in a hands-on way. I’m always looking for new things to build and ways to improve, and I enjoy turning ideas into working software as I continue growing as a software engineer.</p>
            </div>
          </div>
        )}

      </div>

      {/* SPARE IMAGE (FIXED CLASS STRING BUG) */}
      <div className={cn(
        "absolute right-0 -bottom-5",
        id === 5 && "w-full opacity-80"
      )}>
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>

      {/* GRADIENT CARD */}
      {
        id === 7 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )
      }

      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>

        {id === 4 && (
          <div className="absolute inset-0 opacity-40">
            <GlobeDemo />
          </div>)}

        {id === 3 && (
          <div className=" flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2 top-1">
            <div className="flex flex-col gap-1 lg:gap-2 ">
              {['React.js', 'Next.js', 'Java', 'TypeScript'].map((item) => (
                <span key={item} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center text-white bg-black/30'>
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center"></span>
            </div>

            <div className="flex flex-col gap-1 lg:gap-2">
              {['React.js', 'Next.js', 'Java', 'TypeScript'].map((item) => (
                <span key={item} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center text-white bg-[#383838]'>
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center"></span>
            </div>

          </div>
        )}
      </div>
    </div >
  );
};
