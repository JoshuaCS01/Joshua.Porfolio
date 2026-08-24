"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FocusCard = {
    title: string;
    src: string;
};

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: FocusCard;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "group relative aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"

            )}
        >
            <img
                src={card.src}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

export function FocusCards({ cards }: { cards: FocusCard[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex min-w-0 items-center justify-center">
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
