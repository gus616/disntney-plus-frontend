import { useGetRecommendationsQuery } from "../api/recommendationSlice"
import type { Recommendation } from "../models/Recomendation";
import RecommendationItem from "./RecommendationItem";

const Recommendations = () => {

  const { data: recommendations, error, isLoading } = useGetRecommendationsQuery();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading recommendations</div>

  return (
    <div className="w-full min-h-full flex flex-col gap-4 mb-8 mt-4">
      <h1 className="text-2xl text-white">Recommendations for you</h1>
      <div className="w-full gap-2 overflow-x-auto scrollbar-hide overflow-hidden items-center">
        <ul className="flex gap-5 pb-3 space-between px-20">
          {recommendations?.map((rec: Recommendation) => (
            <RecommendationItem key={rec.id.toString()} rec={rec} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Recommendations