import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const cpp = "C++";

const outerSkills = [
  { src: "/icons/nodejs/nodejs-plain-wordmark.svg", label: "Node.js" },
  { src: "/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { src: "/icons/git/git-original.svg", label: "Git" },
  { src: "/icons/linux/linux-original.svg", label: "Linux" },
  { src: "/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
  { src: "/icons/figma/figma-original.svg", label: "Figma" },
  { src: "/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind" },
  { src: "/icons/android/android-original.svg", label: "AndroidStudio" },
];

const innerSkills = [
  { src: "/icons/java/java-original.svg", label: "Java" },
  { src: "/icons/c/c-original.svg", label: "C" },
  { src: "/icons/cplusplus/cplusplus-original.svg", label: cpp },
  { src: "/icons/html5/html5-original.svg", label: "HTML5" },
  { src: "/icons/css3/css3-original.svg", label: "CSS3" },
  { src: "/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "/icons/react/react-original.svg", label: "React" },
];

const allSkills = [...outerSkills, ...innerSkills];

const SkillItem = ({ src, label }: { src: string; label: string }) => (
  <div className="flex min-w-0 flex-col items-center justify-center text-center">
    <img
      src={src}
      alt={label + " logo"}
      className="h-10 w-10 object-contain sm:h-12 sm:w-12 xl:h-14 xl:w-14"
    />
    <p className="mt-2 max-w-full break-words text-xs leading-tight text-white sm:text-sm">
      {label}
    </p>
  </div>
);

const Skills = () => {
  return (
    <div className="grid w-full items-center gap-10 xl:grid-cols-[minmax(0,1fr)_36rem] xl:gap-12">
      <div className="min-w-0 text-white">
        <h2 className="mx-auto mb-8 w-fit text-center font-heading text-3xl font-bold underline sm:text-4xl lg:text-5xl">
          MY SKILLS
        </h2>
        <div className="max-w-2xl space-y-6 text-left font-heading text-sm leading-relaxed sm:text-base md:text-justify lg:text-lg">
          <p>
            Through both my coursework and personal projects I have developed a strong skill set in front-end development.
            My foundation is paved with HTML, CSS, JavaScript, and TypeScript and I frequently use React and Next.js for modern web applications.
          </p>

          <p>
            My coursework has prepared me for team projects by giving me multiple opportunities to collaborate with other students on semester long projects.
            This gave me experience working with version control systems, participating in code reviews, and dividing responsibilities.
            These projects helped me strengthen my communication skills while learning how to integrate front-end and back-end features effectively in a shared codebase.
          </p>

          <p>
            On the back-end side, I’ve worked with Java using Spring Boot and Node.js to build server-side applications and RESTful APIs.
            I’ve also used MySQL, and Firebase to design and manage databases in projects that needed authentication and storage of user data.
          </p>
        </div>
      </div>

      <div className="relative hidden size-[36rem] items-center justify-center justify-self-center xl:flex">
        <OrbitingCircles radius={220} iconSize={72}>
          {outerSkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles radius={115} iconSize={72} reverse>
          {innerSkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </OrbitingCircles>
      </div>

      <div className="grid min-w-0 grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:hidden">
        {allSkills.map((skill) => (
          <SkillItem key={skill.label} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
