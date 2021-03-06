const {
    MessageEmbed
} = require("discord.js");
// =============================================================================
// ๐๐ฒ๐๐จ๐ซ๐ ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐ฎ๐ฅ๐ญ๐ข๐ฉ๐ฎ๐ซ๐ฉ๐จ๐ฌ๐ ๐๐จ๐ญ ๐ฆ๐๐๐ ๐ฐ๐ข๐ญ๐ก ๐๐ข๐ฌ๐๐จ๐ซ๐.๐ฃ๐ฌ ๐๐ง๐ ๐ก๐๐ฌ ๐๐+๐๐๐๐ญ๐ฎ๐ซ๐๐ฌ..
// =============================================================================
module.exports = {
    name: "snipe",
    aliases: [],
    usage: "snipe",
    description: "Get last message which is deleted with message Author and Image(If any)",
    // =============================================================================
    // ๐๐ฒ๐๐จ๐ซ๐ ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐ฎ๐ฅ๐ญ๐ข๐ฉ๐ฎ๐ซ๐ฉ๐จ๐ฌ๐ ๐๐จ๐ญ ๐ฆ๐๐๐ ๐ฐ๐ข๐ญ๐ก ๐๐ข๐ฌ๐๐จ๐ซ๐.๐ฃ๐ฌ ๐๐ง๐ ๐ก๐๐ฌ ๐๐+๐๐๐๐ญ๐ฎ๐ซ๐๐ฌ..
    // =============================================================================
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id);
        if (!msg) {
            message.react("โ");
            message.channel.send(
                new MessageEmbed()
                .setTimestamp()
                .setColor("#FF5733")
                .setAuthor("โไนฮฃTะฏแปNโก๐Multiโฃ๏ธPurpose๐คBot")
                .setURL("https://github.com/krakinz")
                .setTitle("Snipe aka get-Back Deleted Messages")
                .setFooter(`๐๐ฝโReqstd by ${message.author.username}`, message.author.avatarURL({
                    dynamic: true
                }))
                .addFields({
                    name: `**\`โ ๏ธError\`**`,
                    value: "There's nothing to snipe!",
                    inline: true,
                }, {
                    name: `**\`๐ธExample\`**`,
                    value: "pls snipe",
                    inline: true,
                })
            );
            return;
        }
        if (msg.image) {
            embed.setImage(msg.image).setColor("#FF5733").setTimestamp();
        }
        message.channel.send(
            new MessageEmbed().setAuthor(msg.author).setDescription(msg.content)
        );
    },
};
// =============================================================================
// ๐๐ฒ๐๐จ๐ซ๐ ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐ฎ๐ฅ๐ญ๐ข๐ฉ๐ฎ๐ซ๐ฉ๐จ๐ฌ๐ ๐๐จ๐ญ ๐ฆ๐๐๐ ๐ฐ๐ข๐ญ๐ก ๐๐ข๐ฌ๐๐จ๐ซ๐.๐ฃ๐ฌ ๐๐ง๐ ๐ก๐๐ฌ ๐๐+๐๐๐๐ญ๐ฎ๐ซ๐๐ฌ..
// =============================================================================