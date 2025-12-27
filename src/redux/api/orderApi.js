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
  }),
});

export const {
    useCreateOrderMutation,
} = commonApi;
