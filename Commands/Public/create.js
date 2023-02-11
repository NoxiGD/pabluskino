const { SlashCommandBuilder, EmbedBuilder, messageLink } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("create")
      .setDescription("send gdps creation req")
      .addStringOption(option =>
        option.setName("name")
            .setDescription("reqgdps")
            .setRequired(true)
    ),

    async execute(interaction) {
      const { options } = interaction;
      const canal = interaction.guild.channels.cache.get("1072901509303505048");
      const description = options.getString("name");

      const embed = new EmbedBuilder()
        .setAuthor({ name: `request from ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({dynamic: false})}`})
        .setDescription(`${description}`)
        .setColor(0x5fb041)
        .setFooter({ text: 'to create a gdps use /create'});

        const mensaje = await canal.send({
        embeds: [embed],
        fetchReply: true,
      });
      await interaction.reply({ content: "*Your GDPS creation request was sent. Now, wait until a staff member create your GDPS, he will send you all the infos in DMs (make sure to have DMs open on this server !)!", ephemeral: false });
    },
 };