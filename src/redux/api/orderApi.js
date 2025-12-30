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
    getSearchProduct: build.query({
      query: (arg) => ({
        url: `/get-product-by-search`,
        method: "GET",
        params:arg
      }),
    }),
    getMarketingProduct: build.query({
      query: () => ({
        url: `/marketing-product`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyAllOrderQuery,
  useGetAboutUsQuery,
  useGetSearchProductQuery,
  useGetMarketingProductQuery
} = commonApi;
