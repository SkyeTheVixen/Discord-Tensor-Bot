const { Client, MessageEmbed, Intents, Interaction, MessageButton } = require('discord.js');
const ints = [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_WEBHOOKS];
const client = new Client({intents: ints});
const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');
const {Series, DataFrame} = require('pandas-js')
require('dotenv').config();



function loadModel() {
    data = new Series('trainingDats.tsv');
    print(data.head());
}


client.on('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity('with the world', {type: 'WATCHING'});    
    loadModel();
})

client.on('message', async (message) => {
    
})

client.login(process.env.Token);
