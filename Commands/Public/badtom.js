
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("bad-tom")
      .setDescription("bad tom"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "https://cdn.discordapp.com/attachments/1071895132774867005/1071935672581095464/km_20230206-1_360p.mp4", ephemeral: false });
    },
  };  
