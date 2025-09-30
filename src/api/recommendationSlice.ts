import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recommendation } from "../models/Recomendation";

export const recommendationSlice = createApi({
    reducerPath: 'recommendationApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://disntneyplus-api001-bhc8amcsbbcbejfr.canadacentral-01.azurewebsites.net/api/'}),
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