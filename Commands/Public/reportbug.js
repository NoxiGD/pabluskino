const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
  .setName("report-bug")
  .setDescription("Reporta un error del bot")
        .addStringOption(a => a.setName("comando").setDescription("El comando en el que sucede el bug.").setRequired(true))
    .addStringOption(a => a.setName("bug").setDescription("El bug que sucede.").setRequired(true)),

  async run(client, interaction){
          
  const comando = interaction.options.getString("comando")
    const bug = interaction.options.getString("bug")
          
const solucionado = new ButtonBuilder()
		  .setCustomId('solucionado')
		  .setStyle(ButtonStyle.Success)
		  .setLabel('solucionado')
		  .setEmoji('🟢')

        const nosolucionado = new ButtonBuilder()
                  .setCustomId('nosolucionado')
		  .setStyle(ButtonStyle.Danger)
		  .setLabel('no solucionado')
		  .setEmoji('⛔')

             const borrarreport = new ButtonBuilder()
                  .setCustomId('borrarreport')
		  .setStyle(ButtonStyle.Danger)
		  .setLabel('borrar')
		  .setEmoji('🗑️')

          const report1 = new ButtonBuilder()
	.setCustomId('report1')
	.setLabel(`reporte de ${interaction.user.tag}`)
	.setStyle(ButtonStyle.Primary)
	.setDisabled(true);
          
      const boton = new ActionRowBuilder()
        .addComponents(solucionado, nosolucionado, borrarreport, report1)

const embed1 = new Discord.EmbedBuilder()
.setTitle("nuevo reporte")
 .addFields(
            {name: "Reporte de:", value: `\`${interaction.user.tag}\``},
            {name: "La ID del usuario es", value: `\`${interaction.user.id}\``}, //xd me tengo q ir bye tengo cole       Bye, hare mas comandos xd xd
            {name: "Del comando:", value: `\`${comando}\``},
            {name: "El reporte es:", value: `\`${bug}\``},
            {name: "Fue en el servidor:", value: `\`${interaction.guild.name}\``},
            {name: "La ID del servidor es:", value: `\`${interaction.guild.id}\``},
            {name: "La en cual enviaron el reporte", value: `<t:${Math.round(Date.now()/1000)}:t>`}
         )
         .setColor("Random")
          .setFooter({ text: `Reporte de ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
          .setTimestamp()
          .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))

          const embed2 = new Discord.EmbedBuilder()
          .setTitle("reporte no solucionado")
          .setDescription(`
          **reporte no solucionado**
          idUser: ${interaction.user.id}
          user: ${interaction.user.tag}
          reporte: ${bug}
          comando: ${comando}
          `)
          .setColor("Red")
          const embed3 = new Discord.EmbedBuilder()
                .setTitle("reporte solucionado")
          .setDescription(`
          **reporte solucionado**
          idUser: ${interaction.user.id}
          user: ${interaction.user.tag}
          reporte: ${bug}
          comando: ${comando}
          `)
          .setColor("Green")

const borrarEmbed = new Discord.EmbedBuilder()
          .setTitle("🗑️| borra el reporte")
          .setDescription("el reporte se borrara en **5 segundos** ")
          
const m = await client.channels.cache.get("1045764228415492156").send({ embeds: [embed1], components: [boton], fetchReply: true })
          const filtro = i => i.user.id === "874818981180088400";
const collector = m.createMessageComponentCollector({ filter: filtro })
         collector.on('collect', async i => {
		if(i.customId === 'solucionado'){
                    await i.deferUpdate()
            i.editReply({ embeds: [embed3] , components: [] }).then(m => setTimeout(() => m.delete(), 20000)) 
                interaction.user.send({ content: "🌟 el reporte que enviaste fue **solucionado** " })        
        }
		if(i.customId === 'nosolucionado'){
			 await i.deferUpdate()
            i.editReply({ embeds: [embed2] , components: [] }).then(m => setTimeout(() => m.delete(), 20000)) 
                        interaction.user.send({ content: "🔴 el reporte que enviaste fue **no solucionado** " })
        }
                 	if(i.customId === 'borrarreport'){
			 await i.deferUpdate()
            i.editReply({ embeds: [borrarEmbed] , components: [] }).then(m => setTimeout(() => m.delete(), 5000)) 
        interaction.user.send({ 
                content: "tu reporte fue **borrado**"
        })
        }
         
         })
         interaction.reply({ content: "reporte enviado correctamente gracias por enviar el reporte haci podemos reparar al bot", ephemeral: true })
  }
}