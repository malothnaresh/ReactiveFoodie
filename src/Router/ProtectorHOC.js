const TOKEN_KEY = "jwt";

export const login = user => {
  localStorage.setItem(TOKEN_KEY, "TestLogin");
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
