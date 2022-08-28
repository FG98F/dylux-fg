import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, text, usedPrefix, command, participants}) => {

let users = participants.map(u => conn.decodeJid(u.id))
let stiker = false

    if (!m.quoted) throw '✳️ Responde a un sticker'
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw '✳️ Responde a un sticker'
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
    try {
    out = await uploadImage(media)
    } catch {
    out = await webp2png(media)
    }
    
    stiker = await sticker(false, out, global.packname, global.author)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { mentions: users })
}

handler.help = ['sticktag']
handler.tags = ['group']
handler.command = /^(stickertag|sticktag)$/i
export default handler


const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
