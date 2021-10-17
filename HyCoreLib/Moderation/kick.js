const moment = require("moment");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
module.exports = {
  name: "kick",
  aliases: [],
  category: "moderation",
  description: "kick a user",
  cooldown: 5,
  userPerms: ["KICK_MEMBERS"],
  clientPerms: ["KICK_MEMBERS"],
  run: async (client, message, args) => {
    const mentionedMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const reason = args.slice(1).join(" ");
    if (!args[0])
      return message.channel.send(":x: | **Specify someone to kick.**");
    if (!mentionedMember)
      return message.channel.send(":x: | **I can't find that member.**");
    if (mentionedMember.id === message.author.id)
      return message.channel.send(":x: | You can't kick yourself.");
    if (
      mentionedMember.roles.highest.position >=
        message.member.roles.highest.position &&
      message.author.id !== message.guild.owner.id
    ) {
      return message.channel.send(
        ":x: | **You can't kick this member due to your role being lower than that member role.**"
      );
    }
    if (mentionedMember.kickable) {
      const embed = new MessageEmbed()
        .setAuthor(
          `${message.author.username} - (${message.author.id})`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setThumbnail(mentionedMember.user.displayAvatarURL({ dynamic: true }))
        .setColor("#FF5733").setDescription(`
**Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Reason:** ${reason || "None"}
            `);
      message.channel.send(embed);
      mentionedMember.kick();
    } else {
      return message.channel.send(
        ":x: | **I can't kick this user make sure that the users role is lower than my role.**"
      );
    }
    return undefined;
    let channel = db.fetch(`modlog_${message.guild.id}`);
    if (!channel) return;

    const embed = new MessageEmbed()
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
      .setColor("#ff0000")
      .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
      .setFooter(message.guild.name, message.guild.iconURL())
      .addField("**Moderation**", "kick")
      .addField("**User Kicked**", kickMember.user.username)
      .addField("**Kicked By**", message.author.username)
      .addField("**Reason**", `${reason || "**No Reason**"}`)
      .addField("**Date**", message.createdAt.toLocaleString())
      .setTimestamp();

    var sChannel = message.guild.channels.cache.get(channel);
    if (!sChannel) return;
    sChannel.send(embed);
  },
};
