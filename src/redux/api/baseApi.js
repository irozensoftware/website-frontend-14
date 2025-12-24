import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../tagType";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` }),
  endpoints: () => ({}),
  tagTypes: Object.values(tagTypes), // ['user', 'product', ...]
});
