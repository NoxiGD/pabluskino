const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('cry')
    .setDescription('cry.'),

    async execute(interaction) {
      
      const url = await anime.cry();
      
      const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** its crying.`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}