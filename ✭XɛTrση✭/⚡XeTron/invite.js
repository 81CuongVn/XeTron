"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐"
"๐"
require("dotenv").config();
const Discord = require("discord.js");
module.exports = {
    name: "invite",
    description: "Invite XeTron",
    botPerms: ["EMBED_LINKS"],
    run: async (client, message) => {
        message.reply({
            embeds: [new Discord.MessageEmbed()
                .setColor(process.env.XeTrons)
                .setTitle("InviteโกโXษTrฯฮทโญ")
                .setURL("https://github.com/krakinz")
                .setImage("https://i.postimg.cc/522zf8CZ/XeTron.png")
                .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
                .addField(`\`๐Invite\``, `**[Get Me!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`, true)
                .setAuthor("โกXษTrฯฮทโ", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
                .addField(`\`๐Help?\``, "**[Discord](https://discord.gg/TrRtrmgY4A)**", true)
                .addField(`\`๐Owner\``, `**Krakinz**`, true)
                .addField(`\`๐Developer\``, `**KrakinzLab**`, true)
                .setFooter(`๐๐ฝโReqstd by ${message.author.username}`, message.author.avatarURL({
                    dynamic: true
                }))
            ]
        });
    },
};
"๐"
"๐"
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";