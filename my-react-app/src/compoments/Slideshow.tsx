import React, { useEffect, useState } from "react";

interface SlideShowProps {
    images: string[];
    interval?: number; // thời gian chuyển slide (ms)
}

const Slideshow: React.FC<SlideShowProps> = ({ images, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [current, interval]);

    return (
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl">
            {/* SLIDES */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        <img
                            src={img}
                            className="w-full h-auto object-cover"
                            alt={`slide-${idx}`}
                        />

                    </div>
                ))}
            </div>

            {/* PREV / NEXT BUTTON */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
                ❯
            </button>

            {/* DOTS */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition ${current === idx ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
