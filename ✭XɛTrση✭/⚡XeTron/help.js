"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
let os = require("os");
require("dotenv").config();
const ms = require("pretty-ms");
const moment = require("moment");
require("moment-duration-format");
let cpuStat = require("cpu-stat");
const Discord = require("discord.js");
const {
  version
} = require("discord.js");
const {
  XeTronGen
} = require("../../package.json");
const {
  version: discordjsVersion
} = require("discord.js");
module.exports = {
  cooldown: 5,
  name: "help",
  description: "Show this Command List",
  botPerms: ["EMBED_LINKS"],
  aliases: [],
  run: async (client, message) => {
    cpuStat.usagePercent(function (err, percent, seconds) {
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      message.reply({
        embeds: [new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setTitle(`โกไนฮฃTะฏแปNโโขversion: ${XeTronGen}`)
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`Owner\`**`, `**KrakinzKon**`, true)
          .addField(`๐ธ**\`Uptime\`**`, `**${duration}**`, true)
          .addField(`๐ป**\`System\`**`, `**${os.arch()}**`, true)
          .addField(`๐**\`Developer\`**`, `**KrakinzLab**`, true)
          .addField(`๐ก**\`Ping\`**`, `**${client.ws.ping}ms**`, true)
          .addField(`โ๏ธ**\`Engine Version\`**`, `**${XeTronGen}**`, true)
          .addField(`๐ง**\`Discord.js\`**`, `**${discordjsVersion}**`, true)
          .addField(`๐**\`Node Version\`**`, `**${process.version}**`, true)
          .addField(`๐ฅ**\`Users\`**`, `**${client.users.cache.size}**`, true)
          .addField(`๐ฅ๏ธ**\`Platform\`**`, `**\`\`${os.platform()}\`\`**`, true)
          .addField(`๐**\`Library\`**`, `**\`Discord.js v${version}\`**`, true)
          .addField(`๐**\`Created On\`**`, `**${client.user.createdAt}**`, true)
          .addField(`๐ก**\`Servers\`**`, `**${client.guilds.cache.size}**`, true)
          .addField(`๐ฝ**\`CPU usage\`**`, `**\`${percent.toFixed(2)}%\`**`, true)
          .addField(`๐ฌ**\`Commands Count\`**`, `**80+ (more being added)**`, true)
          .addField(`๐ฏ**\`Channels\`**`, `**${client.channels.cache.size}**`, true)
          .addField(`๐ฅณ**\`Users Serving\`**`, `**${client.commands.size} **`, true)
          .addField(`๐**\`Channel Added\`**`, `**${client.channels.cache.size}**`, true)
          .addField(`โ๏ธ**\`Servers Serving\`**`, `**${client.guilds.cache.size} **`, true)
          .addField(`๐**\`CPU\`**`, `**${os.cpus().map((i) => `${i.model}`)[0]}**`, true)
          .setAuthor("โกไนฮฃTะฏแปNโโขINFOS + HELP MENU", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`**\`๐ค Nodejs\`**`, `**${process.version} on ${process.platform} ${process.arch}**`, true)
          .setFooter(`๐๐ฝRequested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          }))
          .addField(`**\`๐พ Memory usage\`**`, `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**`, true)
          .setDescription(`**\`\`\`fix
๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!
\`\`\`**`, true),
        ],
        components: [
          new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("XษTrฯฮท_Help_Menu")
            .setPlaceholder("โกไนฮฃTะฏแปNโโขHษlฯโกMษษณฯโญ")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([{
                label: "XษTrฯฮท",
                description: "Shows all the information commands",
                value: "XษTrฯฮท_XeTron",
                emoji: "โก",
              },

              {
                label: "Settings",
                description: "Change the bot settings",
                value: "XษTrฯฮท_Settings",
                emoji: "โ๏ธ",
              },
              {
                label: "Anime",
                description: "Shows all the Anime commands!",
                value: "XษTrฯฮท_Anime",
                emoji: "๐ฆ",
              },
              {
                label: "Adventure",
                description: "Shows all the adventure commands",
                value: "XษTrฯฮท_Adventure",
                emoji: "๐ฒ",
              },
              {
                label: "Moderation",
                description: "Shows all the moderation commands",
                value: "XษTrฯฮท_Moderation",
                emoji: "๐",
              },
              {
                label: "NSFW",
                description: "Shows all the NSFW commands",
                value: "XษTrฯฮท_NSFW",
                emoji: "๐",
              },
              {
                label: "Utility",
                description: "Shows all the utility commands",
                value: "XษTrฯฮท_Utility",
                emoji: "๐ง",
              },
              {
                label: "Games",
                description: "Shows all the game commands",
                value: "XษTrฯฮท_Games",
                emoji: "๐ฎ",
              },
            ])
          ),
        ],
      });
    })
  },
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");