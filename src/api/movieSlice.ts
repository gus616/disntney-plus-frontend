import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Movie } from "../models/Movie";

export const movieSlice = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://disntneyplus-api001-bhc8amcsbbcbejfr.canadacentral-01.azurewebsites.net/api/'}),
    tagTypes: ['Movies', 'Movie'],
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({
            query: () => 'movies', 
            providesTags: ['Movies']
        }),
        getMovieById: builder.query({
            query: (id) => `movies/${id}`,
            providesTags: (result, error, id) => [{ type: 'Movie', id }]
        })
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery
} = movieSlice;