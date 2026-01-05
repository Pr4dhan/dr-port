"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
    slides: {
        src: string;
        text: string;
    }[];
}

const EmblaCarousel = ({ slides }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <div className="relative group">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div className="relative flex-[0_0_100%] min-w-0" key={index}>
                            <div className="relative h-56 md:h-96 w-full">
                                <Image
                                    src={slide.src}
                                    alt={slide.text}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-center py-6">
                                    <h3 className="text-xl font-bold">{slide.text}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
                aria-label="Previous Slide"
            >
                ◀
            </button>
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
                aria-label="Next Slide"
            >
                ▶
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
                                ? "bg-white w-6"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
