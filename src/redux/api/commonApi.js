import { baseApi } from "./baseApi";

export const commonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => ({
        url: `/get-all-category`,
        method: "GET",
      }),
    }),
    getProductByCategoryWise: build.query({
      query: (arg) => ({
        url: `/get-product-by-category`,
        method: "GET",
        params: arg,
      }),
    }),
    getProductBySlug: build.query({
      query: (slug) => ({
        url: `/get-product-by-slug/${slug}`,
        method: "GET",
      }),
    }),
    getAllFeatrues: build.query({
      query: () => ({
        url: `/get-all-features`,
        method: "GET",
      }),
    }),
    getProductByFeatrueCategory: build.query({
      query: (arg) => ({
        url: `/get-product-by-feature-category`,
        method: "GET",
        params: arg
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetProductByCategoryWiseQuery,
  useGetProductBySlugQuery,
  useGetAllFeatruesQuery,
  useGetProductByFeatrueCategoryQuery,
} = commonApi;
