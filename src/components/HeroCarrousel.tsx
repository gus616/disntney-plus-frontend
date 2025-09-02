import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import type { Movie } from "../models/Movie";
import { getYearFromDate } from "../utils/utils";

type HeroCarrouselProps = {
  movies: Movie[] | undefined;
};

const HeroCarrousel = ({ movies: carrouselMovies }: HeroCarrouselProps) => {
  const [current, setCurrent] = useState(0);

  if (!carrouselMovies || carrouselMovies.length === 0) {
    return <div>No movies available</div>;
  }

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carrouselMovies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carrouselMovies.length]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Hero Section */}
      <div
        className="relative top-10 mt-2 w-full h-[550px] overflow-hidden rounded-2xl shadow-lg cursor-pointer
        hover:border-5 border-white transition-all duration-300"
      >
        <div>
          <SlArrowLeft
            size={60}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70"
            onClick={() =>
              setCurrent(
                (prev) =>
                  (prev - 1 + carrouselMovies.length) % carrouselMovies.length
              )
            }
          />
        </div>

        {carrouselMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={movie.images.find((i) => i.type === "hero")?.url}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-left justify-center text-left text-white p-20">
              <img
                src={movie.images.find((i) => i.type === "logo")?.url}
                alt={movie.title}
                className="mb-4 max-w-xs w-full h-auto object-contain"
                style={{ maxHeight: "120px" }}
              />
              <div className="max-w-lg">
                <p className="text-lg">{movie.description}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <span className="bg-white text-black px-2 py-1 rounded text-sm font-bold">
                  {16}
                </span>
                <span className="text-sm">
                  {getYearFromDate(movie.releaseDate)}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div>
          <SlArrowRight
            size={60}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70"
            onClick={() =>
              setCurrent((prev) => (prev + 1) % carrouselMovies.length)
            }
          />
        </div>
      </div>

      {/* Controls Below */}
      <div className="mt-15 flex gap-2">
        {carrouselMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarrousel;
