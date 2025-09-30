import type { Recommendation } from "../models/Recomendation";

type RecommendationProps = {
  rec: Recommendation;
};

const RecommendationItem = ({ rec }: RecommendationProps) => {
  return (
    <li className="relative group w-[350px] h-[500px] overflow-hidden rounded-lg hover:cursor-pointer hover:border-white hover:border-2 flex-shrink-0">
      {/* Poster background */}
      <div
        className="h-full w-full bg-cover bg-center transform transition duration-300 group-hover:scale-110 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${rec.verticalBannerUrl})` }}
      >
        {/* Always visible content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Fade overlay only on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Logo */}
          <img
            src={rec.logoUrl}
            alt={rec.title}
            className="relative z-10 h-10 mb-2 mx-auto drop-shadow-md"
          />

          {/* Info at bottom */}
          <div className="relative z-10 flex items-center space-around px-2 pb-3">
            <span className="text-white bg-gray-800/80 rounded-lg px-2 py-1 text-xs">
              {new Date().getFullYear()}
            </span>
            <p className="text-xs text-white line-clamp-2 ml-2">{rec.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecommendationItem;
