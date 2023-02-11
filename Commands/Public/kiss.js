const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Kiss an user')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Menciona a un Usuario.')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.kiss();
      
      const embed = new EmbedBuilder()
        .setDescription(`¡**${interaction.user.username}** kissed **${member.username}**!`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}