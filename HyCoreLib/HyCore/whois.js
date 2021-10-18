const moment = require("moment");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "userinfo",
  category: "hycore",
  aliases: [],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  // =============================================================================
  // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
  // =============================================================================
  run: async (client, message, args) => {
    let user;
    if (!args[0]) {
      user = message.member;
    } else {
      user =
        message.mentions.members.first() ||
        (await message.guild.members.fetch(args[0]).catch((err) => {
          message.react("❗");
          message.channel.send(
            new MessageEmbed()
              .setTimestamp()
              .setColor("#FF5733")
              .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
              .setURL("https://github.com/krakinz")
              .setTitle("WhoIs ??")
              .setFooter(
                `👈🏽‍Reqstd by ${message.author.username}`,
                message.author.avatarURL({ dynamic: true })
              )
              .addFields(
                {
                  name: `**\`⚠️Error\`**`,
                  value: "Unable to find this Person!",
                  inline: true,
                },
                {
                  name: `**\`🔸Example\`**`,
                  value: "pls whois Saanvi",
                  inline: true,
                }
              )
          );
          return;
        }));
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    if (!user) {
      message.react("❗");
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#FF5733")
          .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
          .setURL("https://github.com/krakinz")
          .setTitle("WhoIs ??")
          .setFooter(
            `👈🏽‍Reqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addFields(
            {
              name: `**\`⚠️Error\`**`,
              value: "Unable to find this Person!",
              inline: true,
            },
            {
              name: `**\`🔸Example\`**`,
              value: "pls whois Saanvi",
              inline: true,
            }
          )
      );
      return;
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png",
    };
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    let badges = await user.user.flags;
    badges = (await badges) ? badges.toArray() : ["None"];
    let newbadges = [];
    badges.forEach((m) => {
      newbadges.push(m.replace("_", " "));
    });
    let embed = new MessageEmbed().setThumbnail(
      user.user.displayAvatarURL({ dynamic: true })
    );
    let array = [];
    if (user.user.presence.activities.length) {
      let data = user.user.presence.activities;
      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None";
        let xname = data[i].details || "None";
        let zname = data[i].state || "None";
        let type = data[i].type;
        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``);
        // =============================================================================
        // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
        // =============================================================================
        if (data[i].name === "Spotify") {
          embed.setThumbnail(
            `https://i.scdn.co/image/${data[i].assets.largeImage.replace(
              "spotify:",
              ""
            )}`
          );
        }

        embed.setDescription(array.join("\n"));
      }
    }
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    embed.setColor(
      user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor
    );
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    embed.setAuthor(
      user.user.tag,
      user.user.displayAvatarURL({ dynamic: true })
    );
    if (user.nickname !== null) embed.addField("Nickname", user.nickname);
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    embed
      .setTimestamp()
      .setAuthor("HyCore👑Multi☣️Purpose🤖Bot")
      .setURL("https://github.com/krakinz")
      .setTitle("WhoIs ??")
      .addField("Joined At", moment(user.joinedAt).format("LLLL"))
      .addField(
        "Account Created At",
        moment(user.user.createdAt).format("LLLL")
      )
      .addField(
        "Common Information",
        `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`
      )
      .addField("Badges", newbadges.join(", ").toLowerCase() || "None")
      .setFooter(user.user.presence.status, stat[user.user.presence.status]);
    return message.channel.send(embed).catch((err) => {
      return message.channel.send("Error : " + err);
    });
  },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
