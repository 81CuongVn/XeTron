"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const voiceData = require("../../XษTrฯฮทโญDatabase/voiceupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldState, newState) => {
  const data = await voiceData.findOne({
    ำผษศถสึีผึษจษ: newState.guild.id
  });
  if (!data) return;
  let oldUser = oldState.member;
  let newUser = newState.member;
  if (
    (oldUser.voice.channelId !== newUser.voice.channelId &&
      newUser.voice.channelId !== null) ||
    undefined
  ) {
    newState.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} joined the voice channel <#${newUser.voice.channelId}>`
        ),
      ],
    });
  } else if (
    (oldUser.voice.channelId !== newUser.voice.channelId &&
      newUser.voice.channelId === null) ||
    undefined
  ) {
    newState.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.NaNKol)
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} left the voice channel <#${oldUser.voice.channelId}>`
        ),
      ],
    });
  } else if (oldState.mute !== newState.mute) {
    newState.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} was ${newState.mute ? "muted" : "unmuted"}`
        ),
      ],
    });
  } else if (oldState.deaf !== newState.deaf) {
    newState.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} was ${newState.deaf ? "deafened" : "undeafened"}`
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