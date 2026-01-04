import { instance as axiosInstance } from "./axiosInstance";

// Function to create a base axios query
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: process.env.NEXT_PUBLIC_API_URL }) =>
  // Async function to execute the axios query
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      const result = await axiosInstance({
        // Concatenate baseUrl with provided url
        url: baseUrl + url,
        // HTTP method (GET, POST, PUT, DELETE, etc.)
        method,
        // Data to be sent with the request
        data,
        params,
        // URL parameters
        headers: {
          "Content-Type": contentType || "application/json",
          ...headers,
        },
         
      });

      // Ensure to return only the data property
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      // Return error response
      return {
        error: {
          // Extract status code from error response
          status: err.response?.status,
          // Extract error data from error response or use error message
          data: err.response?.data || err.message,
        },
      };
    }
  };
