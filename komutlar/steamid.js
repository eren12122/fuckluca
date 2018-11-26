const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın! :unlem: ');
  
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + `Adlı Kullanıcının İStediği Steam ID`)
    .setColor("#18BF7E")
    .setDescription(`https://steamcommunity.com/id/${mesaj}/`)
    .setThumbnail('')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['steamid', 'steam'],
  permLevel: 2
};

exports.help = {
  name: 'steamid',
  description: 'steamid.',
  usage: 'steamid'
};
