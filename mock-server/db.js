module.exports = () => {
  const fakeList = require("./db/fakeList.json");
  const fakeUser = require("./db/fakeUser.json");

  return {
    fakeList,
    fakeUser,
  };
};
