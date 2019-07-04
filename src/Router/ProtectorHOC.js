export const login = user => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const isLogin = () => {
  if (localStorage.getItem("user")) {
    return true;
  }
  return false;
};
