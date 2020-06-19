/*
Don't forget to NOT c&p, you will not learn anything from this! 
First, install VSC or Atom, or Sublime Editor or Vim to edit this files.
If you want to do so, edit in the notepad, but i don't recommend you to do it.
Then, install the basic Node.JS in your computer.
*/

/*
As long the JSON doesn't accept comments, you need to do npm init in the console.
You personalize the package.json as you want. An example of that is in the package of this github.
*/


/*
 To install the package of discord.js, you need to do "npm install discord.js" in the console.
 You don't need to do anything except that for installing the package of discord.js.
*/



const Discord = require('discord.js')
const client = new Discord.Client()
/*
If you don't know anything of programming, "const" is used to define variables to dinamize or handle an package.
The require is to define an package, or an file, too.
You can convert to ES6 module if you want to do so.
In ES6 module is:
import { Client } from 'discord.js';
const client = new Client()
*/

const config = require("./config.json")
const token = config.token
const prefix = config.prefix

/*
  You need to define an token in the file called config.json, that you can get from creating an application in: https://discordapp.com/developers/applications/me
*/


client.on("ready", () => {
    console.log("Ready!")
})




/*
"console.log" is used to log something in the console, we are using this to alert when the bot is ready.
 If you want to do an Presence / Activity, like moderating or something,
 after the line of the console log, add this:
  client.user.setPresence({ game: { name: 'moderating', type: 0 } });

If you have some questions about this, you can check this revision from StackOverflow:
https://stackoverflow.com/revisions/46793768/2
*/

client.on("message", (msg) => {


    if (!message.guild) return ("Sorry, but you are executing the commands in DM's! Try in an server.")
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    /*
     These are some basic examples, if the author is an bot, don't execute the command, or it isn't starting
     with the prefix, don't execute command.
     And, if the command is executed from DM'S, don't execute the command.
    */
    if (msg.content.startsWith(prefix + "ping")) {
        msg.channel.send("Pong! Ping of the bot: " + client.ws.ping)
    }
    /*
    This create an event listener for messages,
    and if a guy sends "+ping", the bot will respond with "Pong! Ping of the bot:" and the ping.
    */

    if (msg.content.startsWith(prefix + "avatar")) {
        msg.channel.send(message.author.displayAvatarURL())
    }
    /*
    If a guy sends "+avatar", the bot will respond with an image of his avatar.
    Now, if you want to do an Message Embed (documentation here: https://discord.js.org/#/docs/main/stable/examples/embed)
    You need to do:
    
    if(msg.content.startsWith(prefix + "avatar")) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Avatar")
        .setImage(message.author.displayAvatarURL());
        msg.channel.send({embed: embed})
    }
    */

    if (msg.content.startsWith(prefix + "kick")) {
        const user = message.mentions.users.first();
        if(!message.author.hasPermission("KICK_MEMBERS")) return msg.channel.send("You don't have permissions for this!")
        if(!user) return msg.channel.send("You didn't mentioned any user to kick!")
        if (user) {
            const member = msg.guild.member(user);
          if(!member) return msg.channel.send("That member is not in this guild!")
            if (member) {
                member
                    .kick('Optional reason')
                    .then(() => {
                   msg.channel.send("I succesfully banned " + user.tag)

                     console.error(err);
                    })
                
            }
        }
    }

    /*
    Now, if a guy (with permissions of kicking members) types +kick @user, we will kick the user.
    But, for example, if the guy doesn't have permissions, or if there is no user, we need to define what to do.
    You can check the basic kick in the documentation: https://discord.js.org/#/docs/main/stable/examples/moderation
    If you want to do so, you can make an ban, too.
    */


})


client.on('guildMemberAdd', member => {
    /*
      Now, this event listener is gonna make an basic welcome, with no image.
      In the next guides, I will show you how to make an basic canvas image for the welcomes.
    */

   const channel = member.guild.channels.cache.find(ch => ch.name === 'welcomes');

   //You need to specify an channel to send the message.

   if(!channel) return;

   channel.send("Your welcome message goes here.") 

   /*If you want to specify the name of the member, only use `Welcome! {member}`
   You can check the documentation: https://discord.js.org/#/docs/main/stable/examples/greeting
   */
})

client.on("message", (msg) => {
    if (msg.content.startsWith(prefix + "testjoin")) {
		client.emit('guildMemberAdd', message.member);
    }
    
    /*
    Now, to test that everything is fine, we want to test an basic join.
    The "message.member" is the "message.author", you change it.
    */
})



client.login(token)

/*
 This is to log the bot to the API of Discord, if you have questions,
 you can review this in the Documentation of Discord.js: https://discord.js.org/#/docs/main/stable/class/Client
*/





/*
 An v1.5 version of this is coming!
*/