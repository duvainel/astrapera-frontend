import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

const { VITE_APP_BASE_URL, VITE_APP_API_TOKEN } = import.meta.env;

export const baseApi = createApi({
  reducerPath: "astraperaApi",
  baseQuery: fetchBaseQuery({
    paramsSerializer(params) {
      return qs.stringify(params, { encodeValuesOnly: true });
    },
    baseUrl: VITE_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${VITE_APP_API_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (arg) => {
        const params = {
          populate: "*",
        };

        params.filters = {
          categories: {
            slug: {
              $eq: arg.category,
            },
          },
          id: {
            $eq: arg.id,
          },
          title: {
            $contains: arg.search,
          },
        };

        return {
          url: `posts`,
          params,
        };
      },
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getCategories: builder.query({
      query: () => {
        return {
          url: `categories`,
          params: {
            populate: "*",
          },
        };
      },
    }),
    getCategory: builder.query({
      query: (id) => {
        return {
          url: `categories/${id}`,
          params: {
            populate: "*",
          },
        };
      },
    }),
  }),
});

export const {
  useGetPostQuery,
  useLazyGetPostQuery,
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useGetCategoryQuery,
  useLazyGetCategoryQuery,
} = baseApi;
