const { Client, Intents } = require('discord.js'); 
const intents = new Intents(32767); //LOS INTENTS
const client = new Client({ intents }); //EL CLIENTE DEL BOT/ LOS INTENTS DE ARRIBA
const config = require('../config/config.js'); //DEFINIMOS NUESTRO ARCHIVO DE CONFIGURACION

client.on('ready', (client) => { //ABRIMOS UN EVENTO READY
  console.log(`${client.user.username} | Conectado Correctamente`) //PARA QUE LOGGEE EN LA CONSOLA CUANDO EL BOT SE CONECTE
}); //CERRAMOS EL EVENTO

client.on('messageCreate', (client, message) => { //ABRIMOS UN EVENTO MESSAGECREATE O ANTERIORMENTE ERA MESSAGE
  
  if(message.content === "!ping"){ //SI EL CONTENIDO DEL MENSAJE ES IGUAL A "!ping" 
    return message.reply({ content: `${client.ws.ping} | Pong!`}) // QUE RETURNE UN MENSAJE
  } //CERRAMOS EL "COMANDO"
  
}); //CERRAMOS EL EVENTO


const token = config.token; //DEFINIMOS EL TOKEN
client.login(`${token}`); //DAMOS EL TOKEN EN LA CONFIG
