
import db from '../lib/database.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, command, usedPrefix }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
var {age} = db.data.users[m.sender]
   if (age <17) throw conn.reply(m.chat, '❎ Eres menor de edad! vuelve cuando tengas más de 18 años', m) 
let cosp = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/pack.json`)).data 
let url = cosp[Math.floor(Math.random() * cosp.length)]
conn.sendButton(m.chat, `✅ Resultado 🤭`, `Vea más fotos aquí \nhttps://t.me/+8SKOTyja8rBlYTlh \n\n`, url, [['▷▷ Siguiente', `${usedPrefix + command}`]], m)
}
handler.help = ['pack']
handler.tags = ['nsfw']
handler.command = ['pack', 'cosplay']
handler.limit = true
handler.register = true
export default handler
