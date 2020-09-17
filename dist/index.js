//type script to javasrypt converter https://www.typescriptlang.org/play/ 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ``;
client.on("ready", () => {
    console.log("legoro is updated or is running");
});



//when member joins
client.on("guildMemberAdd", member => {
    let welcomeC = client.channels.cache.get(`627687192214372365`);
    welcomeC.send(`Welcome ${member}.Don't be a mean person. Go to <#608451868615639078> if you haven't please and don't forget to get your roles at <#710525192086225039> please.`);
});
client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}else if (message.content === `beep`) {
	message.channel.send('Boop.');
}});

 

//when member leaves 
client.on("guildMemberRemove", member => {
    let bye = client.channels.cache.get(`627687192214372365`);
    bye.send(`well ${member} not big brain only real fans stay in the server`);
});
client.on("message", message => {
    var _a;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (command) {
        case `Lid`:
            message.channel.send(message.author.id);
            break;
        case `Lembed`:
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00cc00')
                .setTitle("My First Embed")
                .setAuthor(`${message.author.username}`);
            message.channel.send(exampleEmbed);
            break;
        
        //link commands 
        case `-youtube`:
            message.channel.send(`https://www.youtube.com/channel/UCI-e2dalNjkxVDqOYeTmBsg`);
            break;
        
        case `-twitch`:
             message.channel.send(`https://www.twitch.tv/legoroyoutube`);
             break;
        //come back commands
        case "legoro your dumb":
            message.channel.send("no he is big brain!");
            break;
        

        //normal comands
        case `ineedhelp`:
            message.channel.send(`what do you need help with? the prefix is - for right now. ask legoro if you need help, or you can just not do anything`);
            break;
        case "-s":
            message.channel.send(`hey what's up I am working now!!!`);
            break;
        case `-whoareyou`:
            message.channel.send(`I am a bot that <@!349983250112053248> made for the fun of it also so he can fuck around with you guys because its funny and he can. He also wants to know how this would work all together and has always wanted his own bot so he is supper happy.`);
            break;
        case `-fuckyou`:
            message.channel.send(`Ya I can be a dick sometimes`);
            break;
        case `-sex`:
            message.channel.send(`pffft legoro haveing sex that will never happen he is just a looser same with Anubis`);
            break;
        case `-a`:
            message.channel.send(`your an asshole <@!502235184180232192>`);
            break;
        case `-dyno?`:
            message.channel.send(`he is the best of all bots I am nothing compaired to him`);
            break;
        case `-heart`:
            message.channel.send(`I :heart: you too! but only legoro. I only :heart: legoro. he made me so ya I also :heart: Pacific Range he also made me`);
            break;
        case `-please`:
            message.channel.send(`please play with me <@!1509291495019249674>`);
            break;
        case `-art`:
            message.channel.send(`bet art of all https://cdn.discordapp.com/attachments/680405338956234773/680405440978223112/Izzy_with_mistakes_fixed.jpg`);
            break;
        case `-heyasian`:
            message.channel.send(`fucking phillup being a fucking dumb asian <@!160836950079700993>`);
            break;
        case `-whoshigh`:
            message.channel.send(`fucking <@!326530569875881986>, <@!648812529094623232>, and <@!563470161835982858>  are always high`);
            break;
        case `-jack`:
            message.channel.send(`Jack you a dick man for real... na I love you :heart:`);
            break;
        case `-dope`:
            message.channel.send(`hey hey <@!563470161835982858> your on the shit list`);
            break;
        case `bruh`:
            message.channel.send(`<@!339722364411576320> I need you to get your roles please so that you can have a fun time`);
            break;

        //testing
        case `-helpme`:
            message.channel.send(`I think you should type out ~~whatsup~~`);
            break;
            case `whatsup`:
                message.channel.send(`haha I got you to type it lol`);
                break;
    }
});
client.login("Njg1MjczMjUzMTIzNTg4MTE2.XsVHSQ.s1vogRVVSvL9brCEPQKNbaGpVt0");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUM7QUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFO0lBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBd0IsQ0FBQztJQUN0RixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsTUFBTSx1R0FBdUcsQ0FBQyxDQUFDO0FBQzVJLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBRSxtQkFBbUIsRUFBRSxNQUFNLENBQUMsRUFBRTtJQUN6QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQXdCLENBQUM7SUFDakYsR0FBRyxDQUFDLElBQUksQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0FBRXZFLENBQUMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7O0lBQzNCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEUsTUFBTSxPQUFPLFNBQUcsSUFBSSxD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