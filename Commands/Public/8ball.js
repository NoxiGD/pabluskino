const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { PermissionsBitField, EmbedBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName("8ball")
  .setDescription('This is the classic 8ball game')
  .addStringOption(option => option.setName('question').setDescription('Your question for the 8ball.').setRequired(true)),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;
        const question = interaction.options.getString("question");

        const choice =  [":8ball:| It is certian.",
        ":8ball:| It is decidedly so.",
         ":8ball:| Without a doubt.",
        ":8ball:| Yes definitely.",
         ":8ball:| You may rely on it.",
        ":8ball:| As I see it, yes.",
         ":8ball:| Most likely.",
        ":8ball:| Outlook good.",
        ":8ball:| Yes.", ":8ball:| Signs point to yes.",
        ":8ball:| Reply hazy, try again.",
         ":8ball:| Ask again later.",
        ":8ball:| Better not tell you now.",
        ":8ball:| Cannot predict now.",
        ":8ball:| Concentrate and ask again.",
        ":8ball:| Don't count on it.",
        ":8ball:| My reply is no.", 
        ":8ball:| My sources say no.",
        ":8ball:| Outlook not so good.",
        ":8ball:| Very doubtful." ]
    
        const ball = Math.round((Math.random() * choice.length))
        const embed = new EmbedBuilder()
        .setTitle(`Question : ${question}?`)
        .setColor("Blue")
        .setDescription(`**Response :** ${choice[ball]}`)
        .setTimestamp()
        .setFooter({ text: "8ball"})
        .setThumbnail("https://magic-8ball.com/wp-content/uploads/ball.webp")
            await interaction.reply ({  embeds: [embed] }).catch(err =>{

            })
  },
}