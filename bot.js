// bot.js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ WhatsApp Bot sudah siap!');
});

client.on('message', message => {
    const msg = message.body.toLowerCase();

    if (msg.includes('mau konsultasi')) {
        message.reply(
            'Selamat datang di *Konsultan Gizi Nazli* 🍎\n\n' +
            'Ketik:\n' +
            '1️⃣ Untuk dihubungi via *Telepon*\n' +
            '2️⃣ Untuk dihubungi via *Chat WhatsApp*'
        );
    } 
    else if (msg === '1') {
        message.reply('Baik, kami akan segera menghubungi Anda via *telepon*. 📞');
    } 
    else if (msg === '2') {
        message.reply('Baik, kami akan melanjutkan konsultasi via *chat WhatsApp*. 💬');
    }
});

client.initialize();
