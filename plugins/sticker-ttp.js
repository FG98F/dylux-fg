import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `✳️ _Envie el texto_\n\n📌Ejemplo *${usedPrefix + command}* dylux-fg`  
  try {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text } ))
    let res = await url.json()
    let stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, '', '', m, null, rpl)
  } catch (e) {
    m.reply('Conversión archivada')
    throw false
  }
}
handler.help = ['ttp <text>']
handler.tags = ['sticker']
handler.command = ['ttp']

export default handler
