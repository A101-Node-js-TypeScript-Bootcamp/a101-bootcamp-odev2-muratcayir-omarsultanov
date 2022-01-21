const setUser = () => {
  return new Promise((resolve, reject) => {
    let user = {
      email: "admin@gmail.com",
      password: "123123123",
    };
    resolve(user)
  });
};



module.exports = { setUser };
