import { cn } from "@/lib/utils";
import React from "react";

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
    return (
        <div
            className={cn(
                "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                className
            )}
        >
            {items.map((item) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="group relative block h-full w-full"
                >
                    <Card className="relative flex h-full flex-col overflow-hidden hover:ring-2 hover:ring-amber-50">
                        <div className="relative h-56 shrink-0 overflow-hidden sm:h-64 lg:h-72">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                        </div>

                        <div className="relative z-20 flex flex-1 bg-gradient-to-b from-neutral-900/90 to-neutral-800/95">
                            <div className="w-full p-5">
                                <CardTitle className="mt-0">{item.title}</CardTitle>

                                <CardDescription className="mt-1 text-white">
                                    {item.description}
                                </CardDescription>

                                <div className="flex flex-wrap gap-2 mt-2 ">
                                    {item.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[clamp(0.625rem,1vw,0.75rem)] text-white hover:bg-white hover:text-black"
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

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/90 shadow-lg shadow-black/20 transition-colors group-hover:border-white/30",
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
