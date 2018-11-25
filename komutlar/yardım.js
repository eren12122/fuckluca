const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `p!temizle Komudu bakımdadır \np!banned = Dene ve Gör! \np!avatarım = Avatarınınızı Gösterir. \np!herkesebendençay = Herkese Çay Alırsınız. \np!koş = Koşarsınız.\np!çayiç = Çay İçersiniz. \np!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \np!çayaşekerat = Çaya Şeker Atarsınız. \np!yumruh-at = Yumruk Atarsınız. \np!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \np!sunucuresmi = BOT Sunucunun Resmini Atar. \np!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \np!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `p!ban = İstediğiniz Kişiyi Sunucudan Banlar. \np!kick  = İstediğiniz Kişiyi Sunucudan Atar. \np!unban = İstediğiniz Kişinin Yasağını Açar. \np!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \np!oylama = Oylama Açar. \np!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "p!yardım = BOT Komutlarını Atar. \np!bilgi = BOT Kendisi Hakkında Bilgi Verir. \np!ping = BOT Gecikme Süresini Söyler. \np!davet = BOT Davet Linkini Atar. \np!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Bu Komutları Siz Bilmesenizde Olur :smile:** ")
  .setFooter('**PreX Bot**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
