const TelegramBot = require('node-telegram-bot-api');

const token = "5121845332:AAG9hGOivF0aWlu3-aYxl0Bix480FmcSyRM";

const bot = new TelegramBot(token, {polling: true});

const arrMessageBot = ["Hi", "Hola", "Bonjour", "As-salamu alaykum", "Kon'nichiwa", "Nǐ hǎo", "Ciao", "Hallo", "Hailo", "Hola", "Saluton"]

const roundMatch = (max) => {
    return Math.round(-2.5 + Math.random() * (max + 1))
}
bot.on('message', msg => {
    const {
        id: id,
        first_name: userName
    } = msg.chat

    if (/hi/gi.test(msg.text)) {
        bot.sendMessage(id, `👋 ${arrMessageBot[roundMatch(10)]} ${userName}`);
    }

})