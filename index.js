const Discord = require('discord.js');
const settings = require('./settings.json');
const bot = new Discord.Client();

bot.on('ready', () => {
   console.log("READY!");
});

bot.on('message', msg => { // Message function
   if (msg.author.bot) return; // Ignore all bots
   if (msg.content.startsWith(settings.prefix)) return; // It always has to starts with the prefix which is '!'

   if (msg.content.startsWith(settings.prefix + "ping")) { // When a player does '!ping'
     msg.reply("Pong!") // The bot will say @Author, Pong!
   }
});

bot.login('OTU4MzI3NHOyMzUjNjAwMjMy.LfC_TA.5i_nSrFdvn7tiu_gYVKBPscI_bp');
