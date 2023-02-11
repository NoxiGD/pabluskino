const Discord = require("discord.js")
const { SlashCommandBuilder } = require("discord.js")
const { PermissionsBitField } = require("discord.js")
const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Say lol")
  .addStringOption(option => option.setName("say").setDescription("Say").setRequired(true)),
         
async execute (interaction, client, Discord) {
let user = interaction.user;
let msg = interaction.options.getString('say')

let embedsay = new EmbedBuilder()
.setTitle("Say lol")
.setColor('Random')
.setDescription(`<@${user.id}> Say: ${msg}`)

interaction.reply({ embeds: [embedsay], ephemeral: false})
            }
    
} 
