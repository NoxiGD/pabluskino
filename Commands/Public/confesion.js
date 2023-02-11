const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("bug")
      .setDescription("Report any bug here")
      .addStringOption((option) =>
        option
          .setName(`bug`)
          .setDescription(`Report bug here`)
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const confecion = interaction.options.getString(`bug`);
  
      const { guild } = interaction;
  
      const channel = interaction.guild.channels.cache.find(
        (c) => c.id === `1068971752409018459`
      );
  
      const embed = new EmbedBuilder()
        .setTitle(`New report`)
        .setColor(`Blue`)
        .setDescription(`${confecion}`)
        .setTimestamp()
        .setFooter({
          text: `Report`
        });
        
  
      const message = await channel.send({
        embeds: [embed],
        fetchReply: true,
      });
  
      interaction.reply({
        content: `bug sended `,
        ephemeral: true,
      });
   },
  };