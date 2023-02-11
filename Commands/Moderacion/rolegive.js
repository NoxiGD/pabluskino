const Discord = require("discord.js")
const { SlashCommandBuilder, userMention } = require("discord.js")
const { PermissionsBitField } = require("discord.js")
const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("promote")
    .setDescription("promote a user")
  .addRoleOption(option => option.setName("role").setDescription("Role").setRequired(true))
    .addUserOption(option => option.setName("usuario").setDescription("Usuario").setRequired(true)),               
async execute (interaction, client, Discord) {
    const permisos = interaction.member.permissions.has("MANAGE_ROLES")
    if(!permisos) return interaction.reply({ content: "No tienes permisos" })   
    const Role = interaction.options.getRole('role');
    const usuario = interaction.options.getMember("usuario");
        usuario.roles.add(Role)
        let embed = new EmbedBuilder()
.setDescription('Ooops... parece que ya tiene ese rol.')
.setColor("C70039")
if(usuario.roles.cache.has(Role.id)) {

                return interaction.reply({embeds: [embed], ephemeral: true})

            }


            const embedverify = new EmbedBuilder()

            .setDescription(`User promoted`)

            .setColor("08C026")

            interaction.reply({embeds: [embedverify], ephemeral: true})
     
            }
    
} 