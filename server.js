const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const bot = new TelegramBot('6836002678:AAFcYZbKXIamEPv8T1KKYemKLO_08q3VpsE', {polling: true});

app.use(express.json());

app.post('/webappquery', (req, res) => {
    const queryId = req.body.query_id;
    const result = // Ваши данные для отправки обратно в бота

    bot.answerWebAppQuery(queryId, result)
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err));
});

app.listen(3000, () => console.log('Server is running on port 3000'));
