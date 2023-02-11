const { SlashCommandBuilder, EmbedBuilder, messageLink } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggest")
      .setDescription("Suggest smth to bot")
      .addStringOption(option =>
        option.setName("suggestion")
            .setDescription("suggestion for bot")
            .setRequired(true)
    ),

    async execute(interaction) {
      const { options } = interaction;
      const canal = interaction.guild.channels.cache.get("1068971752409018459");
      const description = options.getString("suggestion");

      const embed = new EmbedBuilder()
        .setAuthor({ name: `Sugerencia de ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({dynamic: true})}`})
        .setDescription(`${description}`)
        .setColor(0x5fb041)
        .setFooter({ text: 'to send a suggestion use /suggest'});

        const mensaje = await canal.send({
        embeds: [embed],
        fetchReply: true,
      });
      await mensaje.react("<:v_:1072887227840995399>");
      await mensaje.react("<:x_:1072167581491925122>");
      await interaction.reply({ content: "your suggestion was sended", ephemeral: true });
    },
 };