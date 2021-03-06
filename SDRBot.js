const Discord = require('discord.js');

const Dice = require('./functions/diceRoll')
const Session = require('./functions/session')

const {prefix, token} = require('./config/config.json');

const client = new Discord.Client()

client.on('ready', () =>  console.log(`I am logged as ${client.user.tag} and ready!`));

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}nextSession `)) {
        res = Session.nextSession(message);
        return
    }

    if (message.content.startsWith(`${prefix}r `)) {
        Dice.diceRoll(message);
        return
    }
});

client.login(token);
