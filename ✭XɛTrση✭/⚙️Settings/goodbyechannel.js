"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = require("discord.js");
const prefixModel = require("../../XษTrฯฮทโญDatabase/goodbyechannel");
const {
  PokeList
} = require("../../pokelist");
var path = require("path");
let poke = PokeList[Math.floor(Math.random() * PokeList.length)];
console.log(poke);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toUpperCase();
module.exports = {
  cooldown: 5,
  name: "goodbyechannel",
  description: "Change the goodbye channel per server!",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <#channel|off>`;
      const cyanArea = `๐ก${newScpt} Details:
Set the goodbye channel <per server>!`;
      require("dotenv").config();
      await message.react("โ");
      return await message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setURL("https://github.com/krakinz")
          .setColor(process.env.redArea || "#B33F40")
          .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
          .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setFooter(`๐๐ฝRequested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })).setDescription(`**\`\`\`diff
${redArea}\`\`\`

\`\`\`fix
${cyanArea}
\`\`\`**`),
        ],
      });
    }
    if (message.mentions.channels.first()) {
      const data = await prefixModel.findOne({
        ำผษศถสึีผึษจษ: message.guild.id
      });
      if (data) {
        await prefixModel.findOneAndRemove({
          ำผษศถสึีผึษจษ: message.guild.id
        });
        message.reply(
          `Leave Channel set to ${message.mentions.channels.first()}`
        );
        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          ำผษศถสึีผึษจษ: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "โไนฮฃTะฏแปNโก",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
+Leave Channel set to ${message.mentions.channels.first()}
\`\`\`**`),
          ],
        });
        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          ำผษศถสึีผึษจษ: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await prefixModel.findOne({
        ำผษศถสึีผึษจษ: message.guild.id,
      });
      if (data2) {
        await prefixModel.findOneAndRemove({
          ำผษศถสึีผึษจษ: message.guild.id
        });
        message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "โไนฮฃTะฏแปNโก",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
-Leave channel has been turned off!     
\`\`\`**`),
          ],
        });
      } else if (!data2) {
        return message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "โไนฮฃTะฏแปNโก",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
-Leave channel isn't setup!    
\`\`\`**`),
          ],
        });
      }
    }
  },
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");