const TelegramBot = require('node-telegram-bot-api');

const token = '6477069937:AAGacqMfW3G6x8ghTZpOrGwZ8QD7pbyGZ3I';
const webAppUrl = 'https://6569ff835dabd305447f376a--dulcet-snickerdoodle-22ca1c.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {

        await bot.sendMessage(chatId, 'Choose an option', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'TG Bo v 0.1', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
});