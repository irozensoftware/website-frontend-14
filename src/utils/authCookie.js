import Cookies from "js-cookie";

const TOKEN_KEY = "auth_token";

// set token
export const setAuthToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,        // 7 days
    secure: true,
    sameSite: "lax",
  });
};

// get token
export const getAuthToken = () => {
  return Cookies.get(TOKEN_KEY);
};

// remove token
export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};
