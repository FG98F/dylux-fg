import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `✳️ Ingrese un link de Tiktok\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw '❎ No puedo descargar videos'
    m.react(rwait)
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
┌─⊷ TIKTOK
▢ *Nickname:* ${nickname}
▢ *Descripción:* ${description}
└───────────
`.trim(), m)

m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktoknowm', 'tiktokdl'] 

export default handler
