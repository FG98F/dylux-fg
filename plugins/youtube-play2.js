
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Ingresa el título de una canción\n\n*📌 Ejemplo*\n*${usedPrefix + command}* Lil Peep hate my fuccn life `
    m.react('📀')
    let result = await youtubeSearch(text)
    let ytres = result.video
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url} yes`, `▢ ⌚ *Duración:* ${v.durationH}\n▢ 👀 *Vistas:* ${v.view}\n▢ 📆 *Publicado:* ${v.publishedTime}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url} yes`, `▢ ⌚ *Duración:* ${v.durationH}\n▢ 👀 *Vistas:* ${v.view}\n▢ 📆 *Publicado:* ${v.publishedTime}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *FG MUSIC*🔎', `\n 📀Aqui una lista de resultados de : ${text}`, igfg, `Click Aquí `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
