import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `✳️ Que imagen busco?`
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'image.jpg', `
✅ Resultado de : *${text}*
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = ['img', 'image', 'imagen'] 
handler.limit = true 

export default handler
