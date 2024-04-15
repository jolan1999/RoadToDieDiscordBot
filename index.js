const {Client, GatewayIntentBits} =  require('discord.js')
const client = new Client( { intents : [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] } )

client.on('messageCreate', message => {
    if(message.author.bot) return
    //console.log(message)
    if(message.author.username==="roadtodie") message.reply('Yo wassup')
})

client.login('MTIyOTM4NDQyMjU1MDQwNTE1MQ.GAY0DR.6SrSRiKR20R6U6F9MZDSO_hMcgu3IN43YKZDFA')