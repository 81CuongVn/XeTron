const moment = require("moment");
const fetch = require("node-fetch");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "github",
  aliases: [],
  category: "search",
  usage: "Github <Name>",
  exmaple: "Github Emoji",
  description: `Github User Account Information!`,
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send(`Please Give Me A Username!`);

      fetch(`https://api.github.com/users/${args.join("-")}`)
        .then((res) => res.json())
        .then((body) => {
          if (body.message)
            return message.channel.send(
              `User Not Found | Please Give Me A Valid Username!`
            );
          let {
            login,
            avatar_url,
            name,
            id,
            html_url,
            public_repos,
            followers,
            following,
            location,
            created_at,
            bio,
          } = body;

          const embed = new MessageEmbed()
            .setAuthor(`${login} Information!`, avatar_url)
            .setColor("#FF5733")
            .setThumbnail(`${avatar_url}`)
            .addField(`Username`, `${login}`)
            .addField(`ID`, `${id}`)
            .addField(`Bio`, `${bio || "No Bio"}`)
            .addField(`Public Repositories`, `${public_repos || "None"}`, true)
            .addField(`Followers`, `${followers}`, true)
            .addField(`Following`, `${following}`, true)
            .addField(`Location`, `${location || "No Location"}`)
            .addField(
              `Account Created`,
              moment.utc(created_at).format("dddd, MMMM, Do YYYY")
            )
            .setFooter(`Tysm For Using Me! ${message.author.username}`);

          message.channel.send(embed);
        });
    } catch (error) {
      console.log(
        `[Commands] [github] Getting Error In github Command :\n`,
        error
      );
      return message.channel.send(`Something Went Wrong Try Again Later!`);
    }
  },
};
