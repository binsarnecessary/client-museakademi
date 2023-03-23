import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://server-museakademi-production.up.railway.app/api' }),
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
