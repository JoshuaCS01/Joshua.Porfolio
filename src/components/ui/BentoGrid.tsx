import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe"
import { ImagesSlider } from "./images-slider";

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
        "mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-12",
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
        "group/bento shadow-input relative flex min-h-72 w-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        id === 1 && "min-h-[clamp(22rem,65vw,32rem)] lg:col-span-5 lg:min-h-0",
        id === 2 && "min-h-fit lg:col-span-7",
        id === 4 && "min-h-72 lg:col-span-12 lg:min-h-80",
        className,
      )}

      style={{
        background: 'linear-gradient(116deg,rgba(36, 36, 36, 1) 0%, rgba(146, 168, 173, 0.3) 100%)'
      }}>
      {id === 4 && (
        <>
          <div className="absolute top-0 left-0 z-30 m-[clamp(1.25rem,3vw,2.5rem)] max-w-sm">
            <div className="font-sans text-sm font-extralight text-neutral-300 md:text-base">
              {description}
            </div>
            <div className="font-display mt-1 text-lg text-white lg:text-3xl">
              {title}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 opacity-55">
            <GlobeDemo />
          </div>
        </>
      )}

      <div className={cn(id === 6 && "flex justify-center h-full")}>

        {/* MAIN CONTAINER */}

        {/* IMAGE SLIDER BACKGROUND */}
        {img && (
          <div className="absolute inset-0 z-0 h-full">
            <ImagesSlider className={cn("w-full", imgClassName)} images={images}>
              <div />
            </ImagesSlider>
          </div>
        )}

        {/* TITLE + DESCRIPTION OVERLAY (YOUR ORIGINAL CONTENT) */}
        {id !== 2 && id !== 4 && (
          <div className={cn(
            titleClassName,
            "absolute bottom-0 left-0 z-20 flex flex-col justify-center p-[clamp(1.25rem,3vw,2.5rem)] transition duration-200 group-hover/bento:translate-x-2"
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
            "relative z-20 flex flex-col justify-center p-[clamp(1.25rem,3vw,2.5rem)]"
          )}>
            <div className="mx-auto w-full">
            <div className="font-sans text-[clamp(1.125rem,2.25vw,1.75rem)] text-white">
                <h1 className="font-display mb-4 tracking-[-0.02em]">About Me</h1>
              </div>
              <div className="space-y-4 break-words text-justify font-sans text-[clamp(0.9375rem,1.4vw,1.1875rem)] font-extralight leading-[1.7] text-neutral-300 hyphens-auto">
                <p>I am a University of Georgia graduate with a Bachelors of Science in Computer Science. I chose computer science beacause I love creating things and have a strong drive to solve problems.
                  I enjoy working on full-stack applications using Java, TypeScript, React, and REST APIs.
                  I’m always looking for new things to build and ways to improve, and I enjoy turning ideas into applications as I continue growing as a software engineer.
                </p>
                <p>Outside of software development, I’ve got a couple interests and hobbies. I have a passion for music and I am a big enjoyer of College Football.
                  This led me to play in my University’s marching band to pursue that passion and support my favorite football team, The Georgia Bulldawgs (GO DAWGS!!).
                </p>
                <p>In my free time I spend a lot of time coding and building personal projects to solve problems I run into.
                  I have made browser extensions to improve my workflow and Discord bots just to mess with my friends.
                  Those projects, while they are small, help me stay creative while improving my coding skills.
                  When Im not working on personal projects, I am usually playing guitar, watching movies, or playing video games.</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div >
  );
};
