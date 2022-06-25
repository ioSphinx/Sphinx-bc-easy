const {userAccount} = require('sphinx-bc') // npm i sphinx-bc@latest

new userAccount({token: "YourUserToken"}).leveling({
    channel: "The channel you want the user to spam in (id)",
    randomLetters: true,
    time: 15000,
    type: 'eng'
});


// That's all for the leveling