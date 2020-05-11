export const TOKEN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNiZDM1ZmZiZjgxNjViYTI0NzQwMSIsImVtYWlsIjoicm9uYWxkb3NnMTk5OUBvdXRsb29rLmNvbSIsIm5hbWUiOiJSb25hbGRvIEdvbWVzIiwiaWF0IjoxNTg5MTgzOTgyLCJleHAiOjE1ODkyNzAzODJ9.daQJ13WSXI9o1irZy5xMrfaiulKlVtHiKQPL2lmaeJ0";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};