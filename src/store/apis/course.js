import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/api' }),
  reducerPath: "courseApi",
  tagTypes: [
    "Course",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => `/course`,
      providesTags: ["Course"],
    }),
  }),
});

export const {
  useGetAllCourseQuery,
  
} = adminApi;
