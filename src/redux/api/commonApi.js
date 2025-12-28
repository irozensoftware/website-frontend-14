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
    getTodayHotDeals: build.query({
      query: (arg) => ({
        url: `/get-today-hot-deals`,
        method: "GET",
        params: arg
      }),
    }),
    getTopPricingProduct: build.query({
      query: () => ({
        url: `/get-top-pricing`,
        method: "GET"
      }),
    }),
    getBanner: build.query({
      query: () => ({
        url: `/get-banners`,
        method: "GET"
      }),
    }),
    getAllBlogCategory: build.query({
      query: () => ({
        url: `/get-all-blog-category`,
        method: "GET"
      }),
    }),
    getBlogs: build.query({
      query: () => ({
        url: `/get-all-blogs`,
        method: "GET"
      }),
    }),
     getBlogBySlug: build.query({
      query: (slug) => ({
        url: `/get-single-blog/${slug}`,
        method: "GET"
      }),
    }),
     getBlogByCategory:build.query({
      query: (slug) => ({
        url: `/get-blog-by-category/${slug}`,
        method: "GET"
      }),
    }),
     getOrderBuyInvoice:build.query({
      query: (invoice) => ({
        url: `/get-order/${invoice}`,
        method: "GET"
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
  useGetTodayHotDealsQuery,
  useGetTopPricingProductQuery,
  useGetBannerQuery,
  useGetAllBlogCategoryQuery,
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useGetBlogByCategoryQuery,
  useGetOrderBuyInvoiceQuery
} = commonApi;
