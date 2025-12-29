import { baseApi } from "./baseApi";

export const commonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: `/place-order`,
        method: "POST",
        data: data,
      }),
    }),
    getMyAllOrder: build.query({
      query: () => ({
        url: `/my-orders`,
        method: "GET",
      }),
    }),
    getAboutUs: build.query({
      query: () => ({
        url: `/about-us`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyAllOrderQuery,
  useGetAboutUsQuery,
} = commonApi;
