"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const {
  MessageEmbed
} = require("discord.js");
const channelData = require("../../XษTrฯฮทโญDatabase/channelupdate");
module.exports = async (oldThread, newThread) => {
  const data = await channelData.findOne({
    ำผษศถสึีผึษจษ: newThread.guild.id
  });
  if (!data) return;
  if (oldThread.name !== newThread.name) {
    newThread.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Name Changed",
          `${oldThread.name} => ${newThread.name}`,
          true
        ),
      ],
    });
  } else if (oldThread.rateLimitPerUser !== newThread.rateLimitPerUser) {
    newThread.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Slowmode Updated",
          `${oldThread.rateLimitPerUser} => ${newThread.rateLimitPerUser}`
        ),
      ],
    });
  } else if (oldThread.archived !== newThread.archived) {
    newThread.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Archive Status Changed",
          `${oldThread.archived ? "Yes" : "No"} => ${
              newThread.archived ? "Yes" : "No"
            }`
        ),
      ],
    });
  }
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");