"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const prefixModel = require("../../XษTrฯฮทโญDatabase/setprefix");
const Discord = require("discord.js");
const XeFixer = process.env.XeFixer;
require("dotenv").config();
module.exports = async (interaction) => {
  if (!interaction.isSelectMenu()) return;
  if (interaction.customId === "XษTrฯฮท_Help_Menu") {
    let msg = await interaction.channel.messages.fetch(interaction.message.id);
    const prefixData = await prefixModel.findOne({
      ำผษศถสึีผึษจษ: msg.guild.id,
    }).catch((err) => console.log(err));
    if (prefixData) {
      var XeRunner = prefixData.Prefix;
    } else if (!prefixData) {
      XeRunner = XeFixer;
    }
    if (interaction.values[0] === "XษTrฯฮท_Settings") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Settingsโ๏ธรรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`SETPREFIX\`โฎ**`, `**โงช Setup The Prefix Server!โชข \`${XeRunner}\`prefix**`, true)
          .addField(`๐**\`ANTIWORDS\`โฎ**`, `**โงช Setup Antiwords For Server!โชข \`${XeRunner}\`antiwords**`, true)
          .addField(`๐**\`ANTILINK\`โฎ**`, `**โงช Setup antilink For Server!โชข \`${XeRunner}\`antilink**`, true)
          .addField(`๐**\`CHANNELUPDATE\`โฎ**`, `**โงช Setup The Channel Updates for Server!โชข \`${XeRunner}\`channelupdate**`, true)
          .addField(`๐**\`MEMBERUPDATE\`โฎ**`, `**โงช Setup The Member Updates for Server!โชข \`${XeRunner}\`memberupdate**`, true)
          .addField(`๐**\`LEAVEMESSAGE\`โฎ**`, `**โงช Setup The Leave Message Server!โชข \`${XeRunner}\`leavemessage**`, true)
          .addField(`๐**\`WELCOMECHANNEL\`โฎ**`, `**โงช Setup The Welcome Channel Server!โชข \`${XeRunner}\`welcomechannel**`, true)
          .addField(`๐**\`JOINMESSAGE\`โฎ**`, `**โงช Setup The Welcome Message Server!โชข \`${XeRunner}\`JoinMessage**`, true)
          .addField(`๐**\`GOODBYECHANNEL\`โฎ**`, `**โงช Setup The Goodbye Channel Server!โชข \`${XeRunner}\`goodbyechannel**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_XeTron") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**XeTronโกรรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`REPORT\`โฎ**`, `**โงช Report a bug!โชข \`${XeRunner}\`report**`, true)
          .addField(`๐**\`PING\`โฎ**`, `**โงช Get XeTron's ping!โชข \`${XeRunner}\`ping**`, true)
          .addField(`๐**\`INVITE\`โฎ**`, `**โงช Invite XeTron!โชข \`${XeRunner}\`invite**`, true)
          .addField(`๐**\`HELP\`โฎ**`, `**โงช Show this Command List!โชข \`${XeRunner}\`help**`, true)
          .addField(`๐**\`SUGGEST\`โฎ**`, `**โงช Suggest Features for XeTron!โชข \`${XeRunner}\`suggest**`, true)
          .addField(`๐**\`XETRON\`โฎ**`, `**โงช Shows the XeTron informations!โชข \`${XeRunner}\`xetron**`, true)
          .addField(`๐**\`SERVERINFO\`โฎ**`, `**โงช Shows info about a server!โชข \`${XeRunner}\`serverinfo**`, true)
          .addField(`๐**\`SERVERICON\`โฎ**`, `**โงช Shows displaypicture/avatar of server!โชข \`${XeRunner}\`servericon**`, true)
          .addField(`๐**\`SNIPE\`โฎ**`, `**โงช Get last message which is deleted with message Author and Image(If any)!โชข \`${XeRunner}\`snipe**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_Anime") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**รรฑรฏmรช รรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`ANIME\`โฎ**`, `**โงช Search Any Anime!โชข \`${XeRunner}\`anime (anime name)**`, true)
          .addField(`๐**\`SMUG\`โฎ**`, `**โงช Smug Anime Style!โชข \`${XeRunner}\`smug**`, true)
          .addField(`๐**\`SMILE\`โฎ**`, `**โงช Smile Anime Style!โชข \`${XeRunner}\`smile**`, true)
          .addField(`๐**\`HAPPY\`โฎ**`, `**โงช Happy Anime Style!โชข \`${XeRunner}\`happy**`, true)
          .addField(`๐**\`BLUSH\`โฎ**`, `**โงช Blush Anime Style!โชข \`${XeRunner}\`blush**`, true)
          .addField(`๐**\`CRINGE\`โฎ**`, `**โงช Cringe Anime Style!โชข \`${XeRunner}\`cringe**`, true)
          .addField(`๐**\`CRY\`โฎ**`, `**โงช Cry Someone Anime Style!โชข \`${XeRunner}\`cry (mention or ID)**`, true)
          .addField(`๐**\`HUG\`โฎ**`, `**โงช Hug Someone Anime Style!โชข \`${XeRunner}\`hug (mention or ID)**`, true)
          .addField(`๐**\`PAT\`โฎ**`, `**โงช Pat Someone Anime Style!โชข \`${XeRunner}\`pat (mention or ID)**`, true)
          .addField(`๐**\`SLAP\`โฎ**`, `**โงช Slap Someone Anime Style!โชข \`${XeRunner}\`slap (mention or ID)**`, true)
          .addField(`๐**\`POKE\`โฎ**`, `**โงช Poke Someone Anime Style!โชข \`${XeRunner}\`poke (mention or ID)**`, true)
          .addField(`๐**\`BITE\`โฎ**`, `**โงช Bite Someone Anime Style!โชข \`${XeRunner}\`bite (mention or ID)**`, true)
          .addField(`๐**\`BONK\`โฎ**`, `**โงช Bonk Someone Anime Style!โชข \`${XeRunner}\`bonk (mention or ID)**`, true)
          .addField(`๐**\`WAVE\`โฎ**`, `**โงช Wave Someone Anime Style!โชข \`${XeRunner}\`wave (mention or ID)**`, true)
          .addField(`๐**\`WINK\`โฎ**`, `**โงช Wink Someone Anime Style!โชข \`${XeRunner}\`wink (mention or ID)**`, true)
          .addField(`๐**\`YEET\`โฎ**`, `**โงช Yeet Someone Anime Style!โชข \`${XeRunner}\`yeet (mention or ID)**`, true)
          .addField(`๐**\`KICK\`โฎ**`, `**โงช Kick Someone Anime Style!โชข \`${XeRunner}\`kick (mention or ID)**`, true)
          .addField(`๐**\`KILL\`โฎ**`, `**โงช Kill Someone Anime Style!โชข \`${XeRunner}\`kill (mention or ID)**`, true)
          .addField(`๐**\`KISS\`โฎ**`, `**โงช Kiss Someone Anime Style!โชข \`${XeRunner}\`kiss (mention or ID)**`, true)
          .addField(`๐**\`LICK\`โฎ**`, `**โงช Lick Someone Anime Style!โชข \`${XeRunner}\`lick (mention or ID)**`, true)
          .addField(`๐**\`PUNCH\`โฎ**`, `**โงช Punch Someone Anime Style!โชข \`${XeRunner}\`punch (mention or ID)**`, true)
          .addField(`๐**\`DANCE\`โฎ**`, `**โงช Dance Someone Anime Style!โชข \`${XeRunner}\`dance (mention or ID)**`, true)
          .addField(`๐**\`BULLY\`โฎ**`, `**โงช Bully Someone Anime Style!โชข \`${XeRunner}\`bully (mention or ID)**`, true)
          .addField(`๐**\`SMOOCH\`โฎ**`, `**โงช Smooch Someone Anime Style!โชข \`${XeRunner}\`smooch (mention or ID)**`, true)
          .addField(`๐**\`CUDDLE\`โฎ**`, `**โงช Cuddle Someone Anime Style!โชข \`${XeRunner}\`cuddle (mention or ID)**`, true)
          .addField(`๐**\`HANDHOLD\`โฎ**`, `**โงช Handhold Someone Anime Style!โชข \`${XeRunner}\`handhold (mention or ID)**`, true)
          .addField(`๐**\`HIGHFIVE\`โฎ**`, `**โงช Highfive Someone Anime Style!โชข \`${XeRunner}\`highfive (mention or ID)**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_Adventure") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Adventure๐ฒรรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`8BALL\`โฎ**`, `**โงช Tells you a fortune!โชข \`${XeRunner}\`8ball**`, true)
          .addField(`๐**\`ALERT\`โฎ**`, `**โงช Get an Alert message!โชข \`${XeRunner}\`alert**`, true)
          .addField(`๐**\`AMAZEME\`โฎ**`, `**โงช Returns random amazing fact/image!โชข \`${XeRunner}\`amazeme**`, true)
          .addField(`๐**\`BIDEN\`โฎ**`, `**โงช Get a custom Tweet from Biden!โชข \`${XeRunner}\`biden**`, true)
          .addField(`๐**\`CHANGEMYMIND\`โฎ**`, `**โงช Image Manipulation Command!โชข \`${XeRunner}\`changemymind**`, true)
          .addField(`๐**\`CLYDE\`โฎ**`, `**โงช Get a custom clyde message!โชข \`${XeRunner}\`clyde**`, true)
          .addField(`๐**\`ILLEGAL\`โฎ**`, `**โงช Provide a text to Trump for making it illegal!โชข \`${XeRunner}\`illegal**`, true)
          .addField(`๐**\`SCROLL\`โฎ**`, `**โงช Another Fun Command!โชข \`${XeRunner}\`scroll**`, true)
          .addField(`๐**\`TEXTIMAGE\`โฎ**`, `**โงช Text To Image!โชข \`${XeRunner}\`textimage**`, true)
          .addField(`๐**\`TRASH\`โฎ**`, `**โงช Another Image Manipulation Command!โชข \`${XeRunner}\`trash**`, true)
          .addField(`๐**\`TRIGGER\`โฎ**`, `**โงชPut the Triggered Overlay pic over avatars!โชข \`${XeRunner}\`trigger**`, true)
          .addField(`๐**\`WASTED\`โฎ**`, `**โงช Put the GTA Wasted pic over avatars!โชข \`${XeRunner}\`wasted**`, true)
          .addField(`๐**\`AVATAR\`โฎ**`, `**โงช Get a  widened avatar of a user!โชข \`${XeRunner}\`avatar**`, true)
          .addField(`๐**\`ASCII\`โฎ**`, `**โงช Returns provided text in ascii format!โชข \`${XeRunner}\`ascii**`, true)
          .addField(`๐**\`CATSAY\`โฎ**`, `**โงช Make the cat say your message!โชข \`${XeRunner}\`catsay**`, true)
          .addField(`๐**\`COWSAY\`โฎ**`, `**โงช Make a cow say your message!โชข \`${XeRunner}\`cowsay**`, true)
          .addField(`๐**\`CLAP\`โฎ**`, `**โงช Add clap emoji between each word!โชข \`${XeRunner}\`clap**`, true)
          .addField(`๐**\`DAB\`โฎ**`, `**โงช Adds dab emoji after each word!โชข \`${XeRunner}\`dab**`, true)
          .addField(`๐**\`EMOJIFY\`โฎ**`, `**โงช Returns provided text in emojify (emotes) form!โชข \`${XeRunner}\`emojify**`, true)
          .addField(`๐**\`FLIPTEXT\`โฎ**`, `**โงช Flip some text!โชข \`${XeRunner}\`fliptext**`, true)
          .addField(`๐**\`GIF\`โฎ**`, `**โงช Get gifs based on your search!โชข \`${XeRunner}\`gif**`, true)
          .addField(`๐**\`HACK\`โฎ**`, `**โงช Hack Someone lol!โชข \`${XeRunner}\`hack**`, true)
          .addField(`๐**\`HOWGAY\`โฎ**`, `**โงช Check How much gay lmao!โชข \`${XeRunner}\`howgay**`, true)
          .addField(`๐**\`MEME\`โฎ**`, `**โงช Sends a random meme!โชข \`${XeRunner}\`meme**`, true)
          .addField(`๐**\`NITRO\`โฎ**`, `**โงช Fake a nitro gift!โชข \`${XeRunner}\`nitro**`, true)
          .addField(`๐**\`ORANGETEXT\`โฎ**`, `**โงช Colors the Text with Orange Color!โชข \`${XeRunner}\`orangetext**`, true)
          .addField(`๐**\`POKEIMG\`โฎ**`, `**โงช Get Image of the Mentioned Pokemon!โชข \`${XeRunner}\`pokeimg**`, true)
          .addField(`๐**\`PP\`โฎ**`, `**โงช Dick/Penis Machine Calculator!โชข \`${XeRunner}\`pp**`, true)
          .addField(`๐**\`RESPECT\`โฎ**`, `**โงช Returns Random Respect GIF!โชข \`${XeRunner}\`respect**`, true)
          .addField(`๐**\`REVERSE\`โฎ**`, `**โงช Reverse the text entered!โชข \`${XeRunner}\`reverse**`, true)
          .addField(`๐**\`ROAST\`โฎ**`, `**โงช Roasts a user!โชข \`${XeRunner}\`roast**`, true)
          .addField(`๐**\`TRIVIA\`โฎ**`, `**โงช Test your knowledge!โชข \`${XeRunner}\`trivia**`, true)
          .addField(`๐**\`VAPORTEXT\`โฎ**`, `**โงช Fun Command!โชข \`${XeRunner}\`vaportext**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_Moderation") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Moderation๐รรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`CREATEROLE\`โฎ**`, `**โงช Creates A new role in the guild!โชข \`${XeRunner}\`createrole**`, true)
          .addField(`๐**\`DELCHANNEL\`โฎ**`, `**โงช Delete Channels From your Server!โชข \`${XeRunner}\`delchannel**`, true)
          .addField(`๐**\`ANNOUNCE\`โฎ**`, `**โงช Make an Announcemnet in your Serverl!โชข \`${XeRunner}\`announce**`, true)
          .addField(`๐**\`LOCK\`โฎ**`, `**โงช Locks a Channel!โชข \`${XeRunner}\`lock**`, true)
          .addField(`๐**\`SOFTBAN\`โฎ**`, `**โงช Soft Ban a User!โชข \`${XeRunner}\`softban**`, true)
          .addField(`๐**\`UNLOCK\`โฎ**`, `**โงช Unlocks a Channel!โชข \`${XeRunner}\`unlock**`, true)
          .addField(`๐**\`GIVEROLE\`โฎ**`, `**โงช Give roles to users!โชข \`${XeRunner}\`giverole**`, true)
          .addField(`๐**\`REMOVEROLE\`โฎ**`, `**โงช Take roles from users!โชข \`${XeRunner}\`removerole**`, true)
          .addField(`๐**\`KICKOUT\`โฎ**`, `**โงช Kick anyone with one shot xD!โชข \`${XeRunner}\`kickout**`, true)
          .addField(`๐**\`SERVERICON\`โฎ**`, `**โงช Displays the Server Icon!โชข \`${XeRunner}\`servericon**`, true)
          .addField(`๐**\`CLEAR\`โฎ**`, `**โงช delete the given number of messages!โชข \`${XeRunner}\`clear**`, true)
          .addField(`๐**\`NICKNAME\`โฎ**`, `**โงช Change the Nickname of other Users!โชข \`${XeRunner}\`nickname**`, true)
          .addField(`๐**\`MUTE\`โฎ**`, `**โงช Mutes the specified user.โชข \`${XeRunner}\`mute**`, true)
          .addField(`๐**\`UNMUTE\`โฎ**`, `**โงช Un-Mutes the specified user.โชข \`${XeRunner}\`unmute**`, true)
          .addField(`๐**\`TEMPMUTE\`โฎ**`, `**โงช temporarily mute a user for a given time!โชข \`${XeRunner}\`tempmute**`, true)
          .addField(`๐**\`BAN\`โฎ**`, `**โงช Ban anyone with one shot whithout knowing anyone xD!โชข \`${XeRunner}\`ban**`, true)
          .addField(`๐**\`USERINFO\`โฎ**`, `**โงช Get info about your account or mentiobned user's account!โชข \`${XeRunner}\`userinfo**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_NSFW") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**NSFW๐รรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`4K\`โฎ**`, `**โงช \`${XeRunner}\`4k**`, true)
          .addField(`๐**\`ANAL\`โฎ**`, `**โงช \`${XeRunner}\`anal**`, true)
          .addField(`๐**\`ASS\`โฎ**`, `**โงช \`${XeRunner}\`ass**`, true)
          .addField(`๐**\`BDSM\`โฎ**`, `**โงช \`${XeRunner}\`bdsm**`, true)
          .addField(`๐**\`BLOWJOB\`โฎ**`, `**โงช \`${XeRunner}\`blowjob**`, true)
          .addField(`๐**\`BOOB\`โฎ**`, `**โงช \`${XeRunner}\`boobs**`, true)
          .addField(`๐**\`CREAMPIE\`โฎ**`, `**โงช \`${XeRunner}\`creampie**`, true)
          .addField(`๐**\`CUM\`โฎ**`, `**โงช \`${XeRunner}\`cum**`, true)
          .addField(`๐**\`CUMSLUTS\`โฎ**`, `**โงช \`${XeRunner}\`cumsluts**`, true)
          .addField(`๐**\`DANBOORU\`โฎ**`, `**โงช \`${XeRunner}\`danbooru**`, true)
          .addField(`๐**\`DOUJIN\`โฎ**`, `**โงช \`${XeRunner}\`doujin**`, true)
          .addField(`๐**\`EROKEMO\`โฎ**`, `**โงช \`${XeRunner}\`erokemo**`, true)
          .addField(`๐**\`FEETGIF\`โฎ**`, `**โงช \`${XeRunner}\`feetgif**`, true)
          .addField(`๐**\`FEMDOM\`โฎ**`, `**โงช \`${XeRunner}\`femdom**`, true)
          .addField(`๐**\`GANGBANG\`โฎ**`, `**โงช \`${XeRunner}\`gangbang**`, true)
          .addField(`๐**\`GONEWILD\`โฎ**`, `**โงช \`${XeRunner}\`gonewild**`, true)
          .addField(`๐**\`HENTAI\`โฎ**`, `**โงช \`${XeRunner}\`hentai**`, true)
          .addField(`๐**\`HENTAIASS\`โฎ**`, `**โงช \`${XeRunner}\`hentaiass**`, true)
          .addField(`๐**\`HENTAITHIGH\`โฎ**`, `**โงช \`${XeRunner}\`hentaithigh**`, true)
          .addField(`๐**\`KITSUNE\`โฎ**`, `**โงช \`${XeRunner}\`kitsune**`, true)
          .addField(`๐**\`LEWD\`โฎ**`, `**โงช \`${XeRunner}\`lewd**`, true)
          .addField(`๐**\`MAID\`โฎ**`, `**โงช \`${XeRunner}\`maid**`, true)
          .addField(`๐**\`MILF\`โฎ**`, `**โงช \`${XeRunner}\`milf**`, true)
          .addField(`๐**\`NGIF\`โฎ**`, `**โงช \`${XeRunner}\`ngif**`, true)
          .addField(`๐**\`NMW\`โฎ**`, `**โงช \`${XeRunner}\`nmw**`, true)
          .addField(`๐**\`NSFW\`โฎ**`, `**โงช \`${XeRunner}\`nsfw**`, true)
          .addField(`๐**\`ORGY\`โฎ**`, `**โงช \`${XeRunner}\`orgy**`, true)
          .addField(`๐**\`PANTY\`โฎ**`, `**โงช \`${XeRunner}\`panty**`, true)
          .addField(`๐**\`PORNGIF\`โฎ**`, `**โงช \`${XeRunner}\`porngif**`, true)
          .addField(`๐**\`PUBLIC\`โฎ**`, `**โงช \`${XeRunner}\`public**`, true)
          .addField(`๐**\`PUSSY\`โฎ**`, `**โงช \`${XeRunner}\`pussy**`, true)
          .addField(`๐**\`RANDOM\`โฎ**`, `**โงช Human(yes)\nHentai!(yes)โชข \`${XeRunner}\`random**`, true)
          .addField(`๐**\`THIGH\`โฎ**`, `**โงช \`${XeRunner}\`thigh**`, true)
          .addField(`๐**\`VAGINA\`โฎ**`, `**โงช \`${XeRunner}\`vagina**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_Utility") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Utility๐งรรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`EMOJIID\`โฎ**`, `**โงช Get ID of emojis!โชข \`${XeRunner}\`emojiid**`, true)
          .addField(`๐**\`SAY\`โฎ**`, `**โงช Make the bot say your message!โชข \`${XeRunner}\`say**`, true)
          .addField(`๐**\`EMBED\`โฎ**`, `**โงช Send Messages in embed form!โชข \`${XeRunner}\`embed**`, true)
          .addField(`๐**\`GOOGLE\`โฎ**`, `**โงช Search anything on google!โชข \`${XeRunner}\`google**`, true)
          .addField(`๐**\`CALCULATOR\`โฎ**`, `**โงช Calculate any math!โชข \`${XeRunner}\`calculator**`, true)
          .addField(`๐**\`WIKI\`โฎ**`, `**โงช Get Search Results from Wikipedia!โชข \`${XeRunner}\`wiki**`, true)
          .addField(`๐**\`TRANSLATE\`โฎ**`, `**โงช Translates the given message.!โชข \`${XeRunner}\`lock**`, true)
          .addField(`๐**\`WEATHER\`โฎ**`, `**โงช Shows Weather for the provided place!โชข \`${XeRunner}\`weather**`, true)
          .addField(`๐**\`IMDB\`โฎ**`, `**โงช Get the information about series and movies!โชข \`${XeRunner}\`imdb**`, true)
          .addField(`๐**\`ENLARGEMOJI\`โฎ**`, `**โงช Converting Server emoji to PNG/GIF!โชข \`${XeRunner}\`enlargemoji**`, true)
          .addField(`๐**\`AVATAR\`โฎ**`, `**โงช Gives avatar for message author or mentioned user.!โชข \`${XeRunner}\`avatar**`, true),
        ],
      });
    } else if (interaction.values[0] === "XษTrฯฮท_Games") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("โไนฮฃTะฏแปNโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Games๐ฎรรฐmmรฅรฑรยง**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`๐**\`CONNECT4\`โฎ**`, `**โงช connect4 in discord!!โชข \`${XeRunner}\`connect4**`, true)
          .addField(`๐**\`CATCHFISH\`โฎ**`, `**โงช Deletes a role!โชข \`${XeRunner}\`catchfish**`, true)
          .addField(`๐**\`FASTTYPE\`โฎ**`, `**โงช Type as fast as you can!โชข \`${XeRunner}\`fasttype**`, true)
          .addField(`๐**\`FOOTBALL\`โฎ**`, `**โงช Football in discord!โชข \`${XeRunner}\`football**`, true)
          .addField(`๐**\`GUNFIGHT\`โฎ**`, `**โงช Gunfight in discord!โชข \`${XeRunner}\`gunfight**`, true)
          .addField(`๐**\`GUESSTHENUMBER\`โฎ**`, `**โงช Guess The Number!โชข \`${XeRunner}\`guessthenumber**`, true)
          .addField(`๐**\`RPS\`โฎ**`, `**โงช Rock paper scissors in discord!โชข \`${XeRunner}\`rps**`, true)
          .addField(`๐**\`SNAKE\`โฎ**`, `**โงช Classic snake in discord!โชข \`${XeRunner}\`snake**`, true)
          .addField(`๐**\`TTT\`โฎ**`, `**โงช Tic Tac Toe in discord!โชข \`${XeRunner}\`ttt**`, true),
        ],
      });
    }
  }
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");