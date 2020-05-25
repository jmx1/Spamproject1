const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("714333609904832593")
setInterval(function() {
channel.send(`ILuvWasseemSB`);
}, 30)
})

client.login(process.env.BOT_TOKEN);