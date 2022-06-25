const {BotAccount} = require("sphinx-bc");

new BotAccount({token: "Your bot token"}).botbc({
    ownerID: ["Your id"], 
    prefix: "your prefix",
    embedReply: "Optional Option",
    mention: true,
    type: 'off'
});


// That's all for botbc