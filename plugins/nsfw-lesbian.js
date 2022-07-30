import db from '../lib/database.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
  var {age} = db.data.users[m.sender]
   if (age <17) throw conn.reply(m.chat, '❎ Eres menor de edad! vuelve cuando tengas más de 18 años', m) 
   
    let res = await fetch('https://meme-api.herokuapp.com/gimme/lesbians')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, '✅ Aquí tienes', igfg, json.url, [['▷▷ Siguiente', `${usedPrefix + command }`]], m)
}
handler.help = ['lesbian']
handler.tags = ['nsfw']
handler.command = ['lesbians', 'lesbianas', 'lesbian']
handler.limit = true
handler.register = true



export default handler
