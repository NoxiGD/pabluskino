const { SlashCommandBuilder } = require("discord.js");
const Afk = require("../../Schemas/afkSchema");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("set status to afk")
    .addStringOption((option) =>
      option.setName("reason").setDescription("The reason for afk.")
    ),
  async execute(interaction, client) {
    let reason = interaction.options.getString("reason");
    
    const currentTime = new Date();
    try {
      const afk = await Afk.findOneAndUpdate(
        { Guild: interaction.guild.id, User: interaction.user.id },
        { IsAfk: true, Reason: reason, LastSeen: currentTime },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.error(err);
    }

    await interaction.reply({
      content: `<@${interaction.member.user.id}> I set your AFK: ${
        reason || "AFK"
      }`,
    });
  },
};
