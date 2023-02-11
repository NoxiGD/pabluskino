const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dm-user")
    .setDescription("DMs a user")
    .setDMPermission(false)
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Usuario al que enviarselo")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Descripcion del mensaje")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply();
    const member = interaction.options.getUser("user");
    const message = interaction.options.getString("message");

    const msgEmbed = new EmbedBuilder()
      .setColor(0x808080)
      .setTitle("Message Notice")
      .setDescription(
        `**Greeting** :wave:, \n You recived a message. \n **Message:** \n ${message}`
      )
      .setTimestamp()
      .setFooter({ text: "Bot made by Noxi" });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("messgefrom")
        .setLabel(`Message from ${interaction.user.tag}`)
        .setDisabled(true)
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("messageserver")
        .setLabel(`Send from ${interaction.guild}`)
        .setDisabled(true)
        .setStyle(ButtonStyle.Secondary)
    );
    let sendmsg = await member
      .send({ embeds: [msgEmbed], components: [row] })
      .catch((err) => {
        return console.log(`Error to dm ${member.tag} | ${err}`);
      });
    if (sendmsg) {
      await interaction.channel.sendTyping(),
        await interaction.editReply(`dm sended to ${member.tag}`);
    } else if (!sendmsg) {
      await interaction.channel.sendTyping(),
        interaction.editReply(`cannot send message to ${member.tag}`);
    }
  },
};
