"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const Discord = require("discord.js");
const malScraper = require("mal-scraper");
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
  name: "anime",
  description: "Get info about an anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
    const search = `${args}`;
    if (!search) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage !!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <on|off>`;
      const cyanArea = `๐ก${newScpt} Details:\n\nGet info about any anime!`;
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
          .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
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
    `โ""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""โ`;
    malScraper.getInfoFromName(search).then((data) => {
      message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setAuthor("โกXษTrฯฮทโ", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setThumbnail(data.picture)
          .setTitle(`My Anime Search result for ${args}`.split(",").join(" "))
          .addField("Title", `\`${data.title}\``, true)
          .addField("Premiered", `\`${data.premiered}\``, true)
          .addField("Broadcast", `\`${data.broadcast}\``, true)
          .addField("Genres", `\`${data.genres}\``, true)
          .addField("English Title", `\`${data.englishTitle}\``, true)
          .addField("Japanese Title", `\`${data.japaneseTitle}\``, true)
          .addField("Type", `\`${data.type}\``, true)
          .addField("Episodes", `\`${data.episodes}\``, true)
          .addField("Rating", `\`${data.rating}\``, true)
          .addField("Aired", `\`${data.aired}\``, true)
          .addField("Score", `\`${data.score}\``, true)
          .addField("Favorite", `\`${data.favorites}\``, true)
          .addField("Ranked", `\`${data.ranked}\``, true)
          .addField("Duration", `\`${data.duration}\``, true)
          .addField("Studios", `\`${data.studios}\``, true)
          .addField("Popularity", `\`${data.popularity}\``, true)
          .addField("Members", `\`${data.members}\``, true)
          .addField("Score Stats", `\`${data.scoreStats}\``, true)
          .addField("Source", `\`${data.source}\``, true)
          .addField("Synonyms", `\`${data.synonyms}\``, true)
          .addField("Status", `\`${data.status}\``, true)
          .addField("Identifier", `\`${data.id}\``, true)
          .addField("Link", `[Website](${data.url})`, true)
          .setFooter(`๐๐ฝRequested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })),
        ],
      });
    });
  },
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");