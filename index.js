const Discord = require('discord.js');
const prefix = 'tb!';
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', (message) => {
    if (message.content === 'tb!ping') {
        message.reply('Pong!');
    }
    if (message.content === 'tb!terraria') {
        message.reply('Terraria is a game that is developed by ReLogic, here is the Steam page: https://store.steampowered.com/app/105600/Terraria/');
    }
    if (message.content === 'tb!funnimemegame') {
        message.reply('Karlson is a game that is developed by Dani, or DaniDev, here is the Steam page: https://store.steampowered.com/app/1228610/KARLSON/');
    }
})

client.login(process.env.TOKEN);