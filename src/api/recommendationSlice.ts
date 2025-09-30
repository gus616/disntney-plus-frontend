import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recommendation } from "../models/Recomendation";

export const recommendationSlice = createApi({
    reducerPath: 'recommendationApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5218/api/'}),
    tagTypes: ['Recommendations'],
    endpoints: (builder) => ({
        getRecommendations: builder.query<Recommendation[], void>({
            query: () => 'recommendation',
            providesTags: ['Recommendations']
        })
    })
});


export const { 
    useGetRecommendationsQuery
} = recommendationSlice;