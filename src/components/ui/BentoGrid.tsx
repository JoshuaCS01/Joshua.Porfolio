import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";
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
        "mx-auto grid w-full auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
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
  "../images/santa.jpg",
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
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const isPortrait = id === 1;
  const isAbout = id === 2;
  const isGlobe = id === 4;

  return (
    <article
      className={cn(
        "group/bento relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        isPortrait && "min-h-[28rem] sm:min-h-[34rem] lg:min-h-0",
        className,
      )}
      style={{
        background:
          "linear-gradient(116deg,rgba(36, 36, 36, 1) 0%, rgba(146, 168, 173, 0.3) 100%)",
      }}
    >
      {isPortrait && img && (
        <>
          <div className="absolute inset-0 z-0">
            <ImagesSlider className={cn("h-full w-full", imgClassName)} images={images}>
              <div />
            </ImagesSlider>
          </div>
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/35 to-transparent p-5 pt-24 sm:p-8",
              titleClassName,
            )}
          >
            <p className="font-sans text-sm font-extralight text-neutral-300 md:text-base">
              {description}
            </p>
            <h2 className="max-w-96 font-sans text-xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
          </div>
        </>
      )}

      {isAbout && (
        <div className="relative z-20 flex flex-col p-5 transition duration-200 group-hover/bento:translate-x-2 sm:p-7 lg:p-9">
          <h2 className="mb-5 font-sans text-2xl font-bold text-white sm:text-3xl">
            About Me
          </h2>
          <div className="space-y-5 font-sans text-sm font-extralight leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
            <p>
              I am a University of Georgia graduate with a Bachelors of Science in Computer Science. I chose computer science beacause I love creating things and have a strong drive to solve problems.
              I enjoy working on full-stack applications using Java, TypeScript, React, and REST APIs.
              I’m always looking for new things to build and ways to improve, and I enjoy turning ideas into applications as I continue growing as a software engineer.
            </p>
            <p>
              Outside of software development, I&apos;ve got a couple interests and hobbies. I have a passion for music and I am a big enjoyer of College Football.
              This led me to play in my University&apos;s marching band to pursue that passion and support my favorite football team, The Georgia Bulldawgs (GO DAWGS!!).
            </p>
            <p>
              In my free time I spend a lot of time coding and building personal projects to solve problems I run into.
              I have made browser extensions to improve my workflow and Discord bots just to mess with my friends.
              Those projects, while they are small, help me stay creative while improving my coding skills.
              When Im not working on personal projects, I am usually playing guitar, watching movies, or playing video games.
            </p>
          </div>
        </div>
      )}

      {isGlobe && (
        <div className="relative z-20 flex min-h-0 flex-1 flex-col p-5 sm:p-7 lg:p-9">
          <div className="relative z-10">
            <p className="font-sans text-sm font-extralight text-neutral-300 sm:text-base">
              {description}
            </p>
            <h2 className="font-sans text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
          </div>
          <GlobeDemo />
        </div>
      )}
    </article>
  );
};
