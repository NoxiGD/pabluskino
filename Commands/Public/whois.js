const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder } = require(`discord.js`); 

module.exports = {
    data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("See the info of a user / bot.")
    .addUserOption(option =>
         option
         .setName("target")
         .setDescription("The user you want the info of")
         .setRequired(false)),
    async execute (interaction) {

        const user = interaction.options.getUser("target") || interaction.user;
        const member = await interaction.guild.members.fetch(user);
        const icon = user.displayAvatarURL();
        const tag = user.tag;

        const embed = new EmbedBuilder()
        .setTitle(`User Info`)
        .setColor("Random")
        .setAuthor({ name: tag, iconURL: icon})
        .setThumbnail(icon)
        .addFields({ name: "Member", value: `${user}`, inline: false})
        .addFields({ name: "Roles", value: `${member.roles.cache.map(r => r).join(` `)}`, inline: false})
        .addFields({ name: "Joined", value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true})
        .addFields({ name: "Registered", value: `<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true})
        .setFooter({ text: `User ID: ${user.id}`})
        .setTimestamp()

        await interaction.reply({ embeds: [embed] });
    }
}