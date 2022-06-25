const {userAccount} = require("sphinx-bc"); // npm i sphinx-bc@latest

new userAccount({token: "SomeToken goes here"}).autoReaction({
    channel : "Some channel id",
    user: "Some user id"
});

// That's all for the auto reaction

