"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const channelModel = require("../../XษTrฯฮทโญDatabase/channelupdate");
const Discord = require("discord.js");
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
  name: "channelupdate",
  description: "Channel Updates info per server!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
    const data = await channelModel.findOne({
      ำผษศถสึีผึษจษ: message.guild.id
    });
    if (!args[0] || args[0].length > 18) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <channel ID>`;
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
    if (data) {
      try {
        await channelModel.findOneAndRemove({
          ำผษศถสึีผึษจษ: message.guild.id
        });
        await client.channels.cache.get(`${args[0]}`).send({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            )
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL๐UPDATES\n+Now will Receive All The Channel Updates of this server!\n\`\`\``
            ),
          ],
        });
        let newChannel = new channelModel({
          ำผษศถสึีผฦษฆษจษ: args[0],
          ำผษศถสึีผึษจษ: message.guild.id,
        });
        await newChannel.save();
        await message.reply({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL๐UPDATES Is Now Active!\n\`\`\``
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      } catch (e) {
        await message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.NaNKol)
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n-Error sending Confirmation!\n+Please enter a valid ำผษศถสึีผฦษฆษจษ and Try-Again.\`\`\``
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      }
    } else if (!data) {
      try {
        await channelModel.findOneAndRemove({
          ำผษศถสึีผึษจษ: message.guild.id
        });
        await client.channels.cache.get(`${args[0]}`).send({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            )
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL๐UPDATES\n+Now will Receive All The Channel Updates of this server!\n\`\`\``
            ),
          ],
        });
        let newChannel = new channelModel({
          ำผษศถสึีผฦษฆษจษ: args[0],
          ำผษศถสึีผึษจษ: message.guild.id,
        });
        await newChannel.save();
        await message.reply({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL๐UPDATES Is Now Active!\n\`\`\``
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      } catch (e) {
        await message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.NaNKol)
            .setAuthor(
              "โกXษTrฯฮทโ",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n-Error sending Confirmation!\n+Please enter a valid ำผษศถสึีผฦษฆษจษ and Try-Again.\`\`\``
            )
            .setFooter(
              `๐๐ฝRequested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
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