const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
    Events,
    AuditLogEvent
  } = require("discord.js");
  const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = Partials;
  const { EmbedBuilder } = require("discord.js");
  const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
  });

  client.on("guildMemberAdd", (member) => {
  
    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setDescription(`Welcome to ${member.user.username} to Noxi Cloud`)
    .addFields(
      { name: "dont forget to read rules", value: "<#1064489405198389298>"}
    )
    .setTimestamp()

    client.channels.cache.get("1072549768183681024").send({ embeds: [embed] })
  });

  
  const { loadEvents } = require("./Handlers/eventHandler");
  
  client.config = require("./config.json");
  client.events = new Collection();
  client.commands = new Collection();
  
  loadEvents(client);
  
  client.login(client.config.token);

  client.on(Events.ChannelCreate, async (channel) => {
    channel.guild
      .fetchAuditLogs({
        type: AuditLogEvent.ChannelCreate,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = channel.name;
        const id = channel.id;
        let type = channel.type;
  
        if (type == 0) type = `Texto`;
        if (type == 2) type = `Voz`;
        if (type == 13) type = `Stage`;
        if (type == 15) type = `Foro`;
        if (type == 5) type = `Announcememnt`;
        if (type == 4) type = `Categoria`;
  
        const channelID = `1072564097729699850`;
        const Channel = await channel.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Canal Creado`)
          .addFields({ name: `Nombre del canal`, value: `${name} (<#${id}>)` })
          .addFields({ name: `Tipo de canal`, value: `${type}` })
          .addFields({ name: `ID del canal`, value: `${id}` })
          .addFields({ name: `Creado por`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.ChannelDelete, async (channel) => {
    channel.guild
      .fetchAuditLogs({
        type: AuditLogEvent.ChannelDelete,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = channel.name;
        const id = channel.id;
        let type = channel.type;
  
        if (type == 0) type = `Texto`;
        if (type == 2) type = `Voz`;
        if (type == 13) type = `Stage`;
        if (type == 15) type = `Foro`;
        if (type == 5) type = `Announcememnt`;
        if (type == 4) type = `Categoria`;
  
        const channelID = `1072564097729699850`;
        const Channel = await channel.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Canal Eliminado`)
          .addFields({ name: `Nombre del canal`, value: `${name}` })
          .addFields({ name: `Tipo de canal`, value: `${type}` })
          .addFields({ name: `ID del canal`, value: `${id}` })
          .addFields({ name: `Eliminado por`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.GuildBanAdd, async (member) => {
    member.guild
      .fetchAuditLogs({
        type: AuditLogEvent.GuildBanAdd,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = member.user.username;
        const id = member.user.id;
  
        const channelID = `1072564097729699850`;
        const Channel = await member.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Usuario baneado`)
          .addFields({ name: `Nombre del usuario`, value: `${name}` })
          .addFields({ name: `ID del usuario`, value: `${id}` })
          .addFields({ name: `Baneado por`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.GuildBanRemove, async (member) => {
    member.guild
      .fetchAuditLogs({
        type: AuditLogEvent.GuildBanRemove,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = member.user.username;
        const id = member.user.id;
  
        const channelID = `1072564097729699850`;
        const Channel = await member.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Usuario Desbaneado`)
          .addFields({ name: `Nombre del usuario`, value: `${name}` })
          .addFields({ name: `ID del usuario`, value: `${id}` })
          .addFields({ name: `Desbaneado por`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.ChannelCreate, async (channel) => {
    channel.guild
      .fetchAuditLogs({
        type: AuditLogEvent.ChannelCreate,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = channel.name;
        const id = channel.id;
        let type = channel.type;
  
        if (type == 0) type = `Texto`;
        if (type == 2) type = `Voz`;
        if (type == 13) type = `Stage`;
        if (type == 15) type = `Foro`;
        if (type == 5) type = `Announcememnt`;
        if (type == 4) type = `Categoria`;
  
        const channelID = `1072564097729699850`;
        const Channel = await channel.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Canal Creado/new channel created`)
          .addFields({ name: `Nombre del canal/name`, value: `${name} (<#${id}>)` })
          .addFields({ name: `Tipo de canal/type`, value: `${type}` })
          .addFields({ name: `ID del canal/id`, value: `${id}` })
          .addFields({ name: `Creado por/created by`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.ChannelDelete, async (channel) => {
    channel.guild
      .fetchAuditLogs({
        type: AuditLogEvent.ChannelDelete,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = channel.name;
        const id = channel.id;
        let type = channel.type;
  
        if (type == 0) type = `Texto`;
        if (type == 2) type = `Voz`;
        if (type == 13) type = `Stage`;
        if (type == 15) type = `Foro`;
        if (type == 5) type = `Announcememnt`;
        if (type == 4) type = `Categoria`;
  
        const channelID = `1072564097729699850`;
        const Channel = await channel.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Canal Eliminado/channel deleted`)
          .addFields({ name: `Nombre del canal/name`, value: `${name}` })
          .addFields({ name: `Tipo de canal/type`, value: `${type}` })
          .addFields({ name: `ID del canal/id`, value: `${id}` })
          .addFields({ name: `Eliminado por/deleted by`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.GuildBanAdd, async (member) => {
    member.guild
      .fetchAuditLogs({
        type: AuditLogEvent.GuildBanAdd,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = member.user.username;
        const id = member.user.id;
  
        const channelID = `1072564097729699850`;
        const Channel = await member.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Usuario baneado/user banned`)
          .addFields({ name: `Nombre del usuario/name of user`, value: `${name}` })
          .addFields({ name: `ID del usuario/user id`, value: `${id}` })
          .addFields({ name: `Baneado por/banned by`, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.GuildBanRemove, async (member) => {
    member.guild
      .fetchAuditLogs({
        type: AuditLogEvent.GuildBanRemove,
      })
      .then(async (audit) => {
        const { executor } = audit.entries.first();
  
        const name = member.user.username;
        const id = member.user.id;
  
        const channelID = `1072564097729699850`;
        const Channel = await member.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Usuario Desbaneado/user unbanned`)
          .addFields({ name: `Nombre del usuario/name of user`, value: `${name}` })
          .addFields({ name: `ID del usuario/user id`, value: `${id}` })
          .addFields({ name: `Desbaneado por/unbanned by `, value: `${executor.tag}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.MessageDelete, async (message) => {
    message.guild
      .fetchAuditLogs({
        type: AuditLogEvent.MessageDelete,
      })
      .then(async (audit) => {
        const autor = message.author;
  
        const msg = message.content;
  
        if (!msg) return;
  
        const channelID = `1072564097729699850`;
        const Channel = await message.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Mensaje eliminado/message delted`)
          .addFields({ name: `Contenido del mensaje/message content`, value: `${msg}` })
          .addFields({ name: `Canal del mensaje/channel of messsage`, value: `${message.channel}` })
          .addFields({ name: `Autor del mensaje/user of message`, value: `${autor}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });
  });
  
  client.on(Events.MessageUpdate, async (message, newMessage) => {
    message.guild
      .fetchAuditLogs({
        type: AuditLogEvent.MessageUpdate,
      })
      .then(async (audit) => {
        const autor = message.author;
  
        const msg = message.content;
  
        if (!msg) return;
  
        const channelID = `1072564097729699850`;
        const Channel = await message.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`Mensaje editado/message edited`)
          .addFields({ name: `Mensaje inicial/before`, value: `${msg}` })
          .addFields({ name: `Mensaje editado/after`, value: `${newMessage}` })
          .addFields({ name: `Autor del mensaje/message autor`, value: `${autor}` })
          .setTimestamp();
  
        Channel.send({ embeds: [embed] });
      });

      client.on("message", message => {
        if(message.channel.id === "1072909473817042954"){
          if(message.author.bot) return;
      
          if(message.content === 'Acepto'){
            message.member.roles.add("1071830967515357325");
            let user = message.author;

user.send("Gracias por verificarte");
            message.delete();
          }
          else{
            message.author.send("Tienes problemas? Habla con un admin.");
            message.delete();
          }
        }
      });
  });