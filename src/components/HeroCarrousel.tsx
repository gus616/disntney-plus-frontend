
import alienEarthBg from "../../public/hero-images/alienearth.jpg";
import alienTitleImg from "../../public/hero-images/alien-title-logo.png";
import predatoKillerOfKillersBg from "../../public/hero-images/predator-bg.jpg";
import predatorTitleImg from "../../public/hero-images/LogoPredatorKillerofKillers.png";


import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroCarrousel = () => {
    const [current, setCurrent] = useState(0);


    //Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slides = [
        {
            id: 1,
            title: "Alien Earth",
            subtitle: "New episode available now",
            rated: "16+",
            year: "2025",
            imageTitle: alienTitleImg,
            bgImage: alienEarthBg,
        },
        {
            id: 2,
            title: "Predator Killer of Killers",
            subtitle: "Available now",
            rated: "16+",
            year: "2025",
            imageTitle: predatorTitleImg,
            bgImage: predatoKillerOfKillersBg,
        }
    ];

    return (
        <div className="relative top-10 w-full h-[600px] overflow-hidden rounded-2xl shadow-lg cursor-pointer
        hover:border-5 border-white transition-all duration-300
        ">
            <div>
                <SlArrowLeft size={60} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70" onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)} />
            </div>
            {slides.map((slide, index) => (
                <div key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                    ${index === current ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-left justify-center text-left text-white p-20">
                        <img
                            src={slide.imageTitle}
                            alt={slide.title}
                            className="mb-4 max-w-xs w-full h-auto object-contain"
                            style={{ maxHeight: "120px" }}
                        />
                        <p className="text-lg">{slide.subtitle}</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <span className="bg-white text-black px-2 py-1 rounded text-sm font-bold">{slide.rated}</span>
                            <span className="text-sm">{slide.year}</span>
                        </div>
                    </div>
                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <div>
                <SlArrowRight size={60} className="
                absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70
                " onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)} />
            </div>
        </div>
    )
}

export default HeroCarrousel