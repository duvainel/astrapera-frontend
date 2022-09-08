import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "astraperaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer 5241c34853b775ace67617709edf4719e67cab5db1831dab74beceeec05dfe8020011bbb10b0c35ba45f4f80db2bdcea7dffb3dbf9f9efec2e0a9f17c42973b325c78ce8a9b03ee634d4254b946a0d8177ed7233085537f28929c21518908d87b1cbb46decaf70caa04d1ce48458e5b4073452ab1cacbd086b3c75512ad69469"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => {
        return {
          url: `posts`,
          params: {
            populate: "categories",
          },
        };
      },
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery } = baseApi;
