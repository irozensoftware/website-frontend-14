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
    updateProfile: build.mutation({
      query: (data) => ({
        url: `/update-profile`,
        method: "POST",
        data: data,
      }),
    }),
    shippingAddress: build.mutation({
      query: (data) => ({
        url: `/shipping-address`,
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
    getMyAddress: build.query({
      query: () => ({
        url: `/my-address`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useGetMyAddressQuery,
  useShippingAddressMutation,
  useUpdateProfileMutation
} = authApi;
