const {BotAccount} = require('sphinx-bc'); // npm i sphinx-bc@latest

new BotAccount({token: "YourBotToken"}).music({
    prefix: "YourPrefix",
        //Customizing Distube
        leaveOnEmpty: true,
        leaveOnFinish: false,
        leaveOnStop: true,
        searchSongs: 10,
        searchCooldown: 60,
        emptyCooldown: 60,
        nsfw: true,
});


// That's all for music