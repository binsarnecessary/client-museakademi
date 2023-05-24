import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://server-museakademi-production-456b.up.railway.app/api' }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admin",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/users`,
      providesTags: ["User"],
    }),

    getAllUser: build.query({
      query: (id) => '/users',
      providesTags: ["User"],
    }),
    

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),

    getUsers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),

    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),

    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),

    getSales: build.query({
      query: () => "mentor/mentor",
      providesTags: ["Sales"],
    }),

    getAdmins: build.query({
      query: () => "course/admins",
      providesTags: ["Admins"],
    }),

    getUserPerformance: build.query({
      query: (id) => `course/performance/${id}`,
      providesTags: ["Performance"],
    }),

    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUserQuery,
  useGetProductsQuery,
  usegetUsers,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = adminApi;
