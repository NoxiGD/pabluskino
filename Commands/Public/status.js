const { 
    EmbedBuilder,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    Client,
    ChannelType,
    UserFlags,
    version
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("status")
        .setDescription("Status del bot"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        await client.application.fetch();
        const formatter = new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" });
        const getChannelTypeSize = type => client.channels.cache.filter(channel => type.includes(channel.type)).size;
        const embed = new EmbedBuilder()
                .setTitle(`Status de ${client.user.username}`)
                .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
                .addFields(
                    { name: "Descripcion", value: `📝 ${client.application.description || "Nada"}` },
                    {
                        name: "General",
                        value: [
                            `👩🏻‍🔧 **Client** ${client.user.tag}`,
                            `💳 **ID** ${client.user.id}`,
                            `📆 **Created** <t:${parseInt(client.user.createdTimestamp / 1000)}:R>`,
                            `👑 **Owner** ${client.application.owner ? `<@${client.application.owner.id}> (${client.application.owner.tag})` : "Nadie"}`,
                            `✅ **Verified** ${client.user.flags & UserFlags.VerifiedBot ? "Si" : "No"}`,
                            `🏷 **Tags** ${client.application.tags.length ? formatter.format(client.application.tags.map(tag => `*${tag}*`)) : "Nada"}`,
                            `🔗 **Commands** ${client.commands.size}`
                        ].join("\n")
                    },
                    {
                        name: "Sistema",
                        value: [
                            `⏰ **Time online** <t:${parseInt(client.readyTimestamp / 1000)}:R>`,
                            `🏓 **Ping** ${client.ws.ping}ms`,
                            `💾 **CPU** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}%`,
                            `👩🏻‍🔧 **Node.js** ${process.version}`,
                            `🛠 **Discord.js** ${version}`
                        ].join("\n"),
                        inline: true
                    },
                    {
                        name: "Estadisticas",
                        value: [
                            `🌍 **Servers** ${client.guilds.cache.size}`,
                            `👨‍👩‍👧‍👦 **Users** ${client.users.cache.size}`,
                            `😏 **Emojis** ${client.emojis.cache.size}`,
                            `💬 **Text channels** ${getChannelTypeSize([ChannelType.GuildText, ChannelType.GuildForum, ChannelType.GuildNews])}`,
                            `🎙 **Voice channels** ${getChannelTypeSize([ChannelType.GuildVoice, ChannelType.GuildStageVoice])}`,
                            `🧵 **Threads** ${getChannelTypeSize([ChannelType.GuildPublicThread, ChannelType.GuildPrivateThread, ChannelType.GuildNewsThread])}`
                        ].join("\n"),
                        inline: true
                    }
                )
                .setColor(0x5fb041)
            interaction.reply({ embeds: [embed]});
    }
};
