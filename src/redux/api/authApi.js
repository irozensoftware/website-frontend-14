import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        data: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        data: data,
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: `/profile`,
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery } =
  authApi;
