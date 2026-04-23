import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        skills: string[];
        img: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                >
                    <Card className="lg:h-170 md:200 h-90 relative overflow-hidden hover:dark:bg-gray-700 hover:ring-2 hover:ring-amber-50">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 lg:h-150 h-50">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-black/15 z-10" />

                        <div className="absolute bottom-0 left-0 right-0 z-50">
                            <div className="p-4 bg-black/70 backdrop-blur-sm">
                                <CardTitle className="mt-0">{item.title}</CardTitle>

                                <CardDescription className="mt-1 text-white line-clamp-2 hover:line-clamp-none">
                                    {item.description}
                                </CardDescription>

                                <div className="flex flex-wrap gap-2 mt-2 ">
                                    {item.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-white text-[10px] md:text-base lg:text-base px-2 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-white hover:text-black "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: any) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            {children}
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn(
            "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
            className
        )}
        >
            {children}
        </p>
    );
};
