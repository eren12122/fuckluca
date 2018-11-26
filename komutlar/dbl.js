const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Bu Komudun Yanına İstediğiniz Botun ID Sini yazınız. Eğer Linkte Bot Çıkmadı ise onaylanmamıştır.');
  
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + `Discord Bot List Bot ID İle bot arama`)
    .setColor("#18BF7E")
    .setDescription(`https://discordbots.org/bot/${mesaj}   Bu Komudun Yanına İstediğiniz Botun ID Sini yazınız. Eğer Linkte Bot Çıkmadı ise onaylanmamıştır.`)
    .setThumbnail('')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dbl'],
  permLevel: 2
};

exports.help = {
  name: 'dbl',
  description: 'dbl',
  usage: 'dbl'
};
