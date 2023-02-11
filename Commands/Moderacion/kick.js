const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("kick")
      .setDescription("Kick any user you want")
      .addUserOption((option) =>
        option
          .setName(`target`)
          .setDescription(`User to kick`)
          .setRequired(true)
      )
      .addStringOption((option) =>
        option.setName(`razon`).setDescription(`Reason of kick`)
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const user = interaction.options.getUser(`target`);
      const { guild } = interaction;
  
      let razon = interaction.options.getString(`reason`);
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);
  
      if (!razon) razon = "No reason specified";
      if (user.id === interaction.user.id)
        return interaction.reply({
          content: `you cant kick urself lol`,
          ephemeral: true,
        });
      if (user.id === client.user.id)
        return interaction.reply({
          content: `you cant kick me L`,
          ephemeral: true,
        });
      if (
        member.roles.highest.position >= interaction.member.roles.highest.postion
      )
        return interaction.reply({
          content: `You cannot kick someone with a role equal to or higher than yours.`,
          ephemeral: true,
        });
      if (!member.kickable)
        return interaction.reply({
          content: `I can't kick someone with a higher role than me`,
          ephemeral: true,
        });
  
      const embed = new EmbedBuilder()
        .setAuthor({
          name: `${guild.name}`,
          iconURL: `${
            guild.iconURL({ dynamic: true }) ||
            "https://cdn.discordapp.com/attachments/1053464482095050803/1053464952607875072/PRywUXcqg0v5DD6s7C3LyQ.png"
          }`,
        })
        .setTitle(`${user.tag} has been kicked from server!`)
        .setColor(`#ff0000`)
        .setTimestamp()
        .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
        .addFields({ name: `Reason`, value: `${razon}` });
  
      await member.kick(razon).catch(console.error);
  
      interaction.reply({ embeds: [embed] });
    },
  };