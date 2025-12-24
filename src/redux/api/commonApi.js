import { baseApi } from "./baseApi";

export const commonApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCategory: build.query({
            query: () => ({
                url: `/get-all-category`,
                method: "GET"
            })
        }),
         getProductByCategoryWise: build.query({
            query: (arg) => ({
                url: `/get-product-by-category`,
                method: "GET",
                params: arg
            })
        }),
        
    }),
});

export const {
   useGetAllCategoryQuery,
   useGetProductByCategoryWiseQuery
} = commonApi;