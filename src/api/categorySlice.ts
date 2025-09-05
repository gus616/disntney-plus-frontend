import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Category } from "../models/Category";

export const categorySlice = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5218/api/'}),
    tagTypes: ['Categories', 'Category'],
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => 'categories', 
            providesTags: ['Categories']
        }),
        getCategoryById: builder.query<Category, string>({
            query: (id) => `categories/${id}`,
            providesTags: (result, error, id) => [{ type: 'Category', id }]
        })
    })
});

export const {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery
} = categorySlice;