const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')//////////// cambiar comando
    .setDescription('slap any user')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.slap();////////// cambiar el anime.slap por el que quieras ej: anime.kiss , anime.highfive ect todo en la pagina de anime actions
      
      const embed = new EmbedBuilder()
        .setDescription(`¡**${interaction.user.username}** has been slaped **${member.username}**!`)///////// cambiar el texto por la accion que hace
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}
/////////////////////////// se puede hacer un copy paste de este comando cambiando los textos y el comando en si para hacer otra interaccion