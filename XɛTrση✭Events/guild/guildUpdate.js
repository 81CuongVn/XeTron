"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const serverData = require("../../XษTrฯฮทโญDatabase/serverupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldGuild, newGuild) => {
  const data = await serverData.findOne({
    ำผษศถสึีผึษจษ: newGuild.id
  });
  if (!data) return;
  if (newGuild.name !== oldGuild.name) {
    newGuild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Name Changed",
          `${oldGuild.name} => ${newGuild.name}`
        ),
      ],
    });
  } else if (newGuild.iconURL() !== oldGuild.iconURL()) {
    newGuild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Icon Changed",
          `[Old Icon](${oldGuild.iconURL()}) => [New Icon](${newGuild.iconURL()})`
        ),
      ],
    });
  } else if (newGuild.splashURL() !== oldGuild.splashURL()) {
    newGuild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Splash Changed",
          `[Old Splash](${oldGuild.splashURL()}) => [New Splash](${newGuild.splashURL()})`
        )
        .setThumbnail(`${newGuild.splashURL()}`)
        .setTimestamp(),
      ],
    });
  } else if (newGuild.memberCount !== oldGuild.memberCount) {
    newGuild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Members Changed",
          `${oldGuild.memberCount} => ${newGuild.memberCount}`
        ),
      ],
    });
  } else if (newGuild.ownerId !== oldGuild.ownerId) {
    newGuild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Owner Changed",
          `${oldGuild.owner.user.username} => ${newGuild.owner.user.username}`
        ),
      ],
    });
  } else {
    return;
  }
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");