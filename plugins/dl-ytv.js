
import fg from 'fg-dylux' 
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Ejemplo :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Verifica que el link de YouTube`
	let chat = global.db.data.chats[m.chat]
	m.react(rwait) 
	
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		try {
       if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG MUSIC*\n\n▢ *⚖️Peso* : ${size}\n▢ *🎞️Calidad* : ${q}\n\n▢ _El archivo supera el límite de descarga_ *+${limit} MB*`) 
    
		conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *FG MUSIC*
  
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp4
▢ *🎞️Calidad* : ${q}
▢ *⚖️Peso* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch (e) {
	m.reply('Error: no se pudo descargar el video prueba con otro o baje la calidad')
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'fgmp4']
handler.diamond = true

export default handler
