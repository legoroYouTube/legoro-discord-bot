import * as Discord from "discord.js"
const client = new Discord.Client();
const prefix = ``;
client.on("ready", () => {
    console.log("Ready To Go!!!");
});
client.on("guildMemberAdd", member => {
    let welcomeC = client.channels.cache.get(`627687192214372365`) as Discord.TextChannel;
    welcomeC.send(`Welcome ${member}.Don't be a mean person. Go to rules if you haven't please and don't forget to get your roles please.`);
});
client.on ("guildMemberRemove", member => {
let bye = client.channels.cache.get(`627687192214372365`) as Discord.TextChannel;
bye.send("well there not big brain only real fans stay in the server");

});


client.on("message", message =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    switch (command) {
        case `id`:
            message.channel.send(message.author.id);
            break;
        case `embed`:
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00cc00')
                .setTitle("My First Embed")
                .setAuthor(`${message.author.username}`);
            message.channel.send(exampleEmbed);
            break;
        case "s":
            message.channel.send(`hey what's up I am working now!!!`);
            break;
        case `whoareyou`:
            message.channel.send(`I am a bot that <@!349983250112053248> made for the fun of it also so he can fuck around with you guys because its funny and he can. He also wants to know how this would work all together and has always wanted his own bot so he is supper happy.`);
            break;
        case `fuckyou`:
            message.channel.send(`Ya I can be a dick sometimes`);
            break;
        case `youtube`:
            message.channel.send(`https://www.youtube.com/channel/UCI-e2dalNjkxVDqOYeTmBsg`);
            break;
        case `sex`:
            message.channel.send(`pffft legoro haveing sex that will never happen he is just a looser same with Anubis`);
            break;
        case `a`:
            message.channel.send(`your an asshole <@!502235184180232192>`);
            break;
        case `dyno?`:
            message.channel.send(`he is the best of all bots I am nothing compaired to him`);
            break; 
        case `heart`:
            message.channel.send(`I :heart: you too! but only legoro. I only :heart: legoro. he made me so ya I also :heart: Pacific Range he also made me`);
            break;  
        case `please`:
            message.channel.send(`please play with me <@!1509291495019249674>`)
            break;
        case `art`:
            message.channel.send(`bet art of all https://cdn.discordapp.com/attachments/680405338956234773/680405440978223112/Izzy_with_mistakes_fixed.jpg`);
            break;
        case `heyasian`:
            message.channel.send(`fucking phillup being a fucking dumb asian <@!160836950079700993>`);
            break;
        case `whoshigh`:
            message.channel.send(`fucking <@!326530569875881986>, <@!648812529094623232>, and <@!563470161835982858>  are always high`);
            break;
        case `jack`:
            message.channel.send(`Jack you a dick man for real... na I love you :heart:`);
            break;
        case `dope`:
            message.channel.send(`hey hey <@!563470161835982858> your on the shit list`);
            break;
        case `twitch`:
            message.channel.send(`https://www.twitch.tv/legoroyoutube`);
            break;    
        case `help`:
            message.channel.send(`this is the problem <@!634724788761395201>`);
            break;

    }
});
client.login("Njg1MjczMjUzMTIzNTg4MTE2.XsVHSQ.s1vogRVVSvL9brCEPQKNbaGpVt0");