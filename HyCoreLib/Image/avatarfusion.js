const { createCanvas, loadImage } = require("canvas");
const request = require("node-superfetch");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "avatarfusion",
  category: "Image",
  aliases: [],
  description: "Fusion Two Avatars",
  usage:
    "[first mention | first username | first ID | first nickname] <second mention | second username | second ID | second nickname> ",
  accessableby: "everyone",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (bot, message, args) => {
    if (!message.guild.me.hasPermission("ATTACH_FILES"))
      return message.channel.send("**Missing Permissions - [ATTACH_FILES]!**");
    if (!args[0])
      return message.channel.send(
        "**Which User Would You Like To Be The Base?**"
      );
    if (!args[1])
      return message.channel.send(
        "**Which User Would You Like To Put Over The Base?**"
      );
    let base =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (r) => r.displayName === args[0].toLocaleLowerCase()
      );
    if (!base) return message.channel.send("**Base User Not Found!**");
    let overlay =
      message.mentions.members.first(2)[1] ||
      message.guild.members.cache.get(args[1]) ||
      message.guild.members.cache.find(
        (r) => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (r) => r.displayName === args[1].toLocaleLowerCase()
      );
    if (!overlay) return message.channel.send("**Overlay User Not Found!**");
    const baseAvatarURL = base.user.displayAvatarURL({
      format: "png",
      size: 512,
    });
    const overlayAvatarURL = overlay.user.displayAvatarURL({
      format: "png",
      size: 512,
    });
    try {
      const baseAvatarData = await request.get(baseAvatarURL);
      const baseAvatar = await loadImage(baseAvatarData.body);
      const overlayAvatarData = await request.get(overlayAvatarURL);
      const overlayAvatar = await loadImage(overlayAvatarData.body);
      const canvas = createCanvas(baseAvatar.width, baseAvatar.height);
      const ctx = canvas.getContext("2d");
      ctx.globalAlpha = 0.5;
      ctx.drawImage(baseAvatar, 0, 0);
      ctx.drawImage(overlayAvatar, 0, 0, baseAvatar.width, baseAvatar.height);
      return message.channel.send({
        files: [{ attachment: canvas.toBuffer(), name: "avatarfusion.png" }],
      });
    } catch (err) {
      return message.channel.send(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  },
};
