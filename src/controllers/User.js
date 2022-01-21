const httpStatus = require("http-status");
const {
  generateAccesToken,
  generaterRefreshToken,
} = require("../scripts/utils/helper");
const { setUser } = require("../services/User");


const loginUser = (req, res) => {
  setUser(req.body)
    .then((user) => {
      if (!user)
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "Böyle bir kullanıcı bulunamadı..." });//If there is no user message is sent
      user = {//if user exists token is sent
        tokens: {
          access_token: generateAccesToken(user),
          refresh_token: generaterRefreshToken(user),
        },
      };
      res.status(httpStatus.OK).send(user);//if everything goes right
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);//if there is an error
    });
};

module.exports = { loginUser };
