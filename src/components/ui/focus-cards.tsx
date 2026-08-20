"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: Card;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "relative aspect-square w-full max-w-xl overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 ease-out motion-reduce:transition-none dark:bg-neutral-900",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"

            )}
        >
            <img
                src={card.src}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

type Card = {
    title: string;
    src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex w-full max-w-5xl items-center justify-center md:px-8">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
