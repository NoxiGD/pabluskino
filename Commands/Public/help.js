const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { PermissionsBitField, EmbedBuilder } = require(`discord.js`);
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("help")
  .setDescription('See my help menu'),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;

let embed1 = new EmbedBuilder()
.setTitle("😂 Fun commands")
.setDescription(` __Here are all public commands
8ball,avatar,bad-tom,calculate,confesion,cry,dm-user,embed create,help,kiss,member-count,meme,ping,rps,report-bug(only in gearSD server),say,slap,status,suggest(only GearSD server),ticket,translator and whois__ `)
.setColor('Random')

let embed2 = new EmbedBuilder()
.setTitle("🛠️ Moderation")
.setDescription(`__There are all moderation commands
ban,clear,id-converter,kick,lock,role-give,set-status,timeout,unban and unlock__`)
.setColor('Random')

       let menu = new Discord.ActionRowBuilder().addComponents(
        new Discord.StringSelectMenuBuilder()
            .setCustomId("panel")
            .setPlaceholder("Select an option")
            .addOptions(
                {
                    label: "😂 Fun commands",
                    description: "all funny commands",
                    value: "panel"
                },
                {
                    label: "🛠️ Moderation",
                    description: "All moderator commands",
                    value: "generales"
                },
            )
    )
//Aquí cambias el nombre de los embeds
    interaction.reply({ embeds: [embed1], components: [menu] }).then( () => {
        interaction.channel.createMessageComponentCollector().on("collect", (c) => {
            let valor = c.values[0];

            if (valor === "panel") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed1] })
            } else if (valor === "generales") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed2] })
            }
        })
    })

  },
}