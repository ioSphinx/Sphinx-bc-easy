const {userAccount} = require("sphinx-bc");

new userAccount({token: "your user token"}).bc({
    ownerID: ["Your id"],
    prefix: "Your prefix",
    mention: true,
});

//That's all for the user broadcast