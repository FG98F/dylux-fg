
import fg from 'api-dylux' 
let free = 150 // limite de descarga
let prem = 500
let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {

	if (!args[0]) throw `✳️ ${msg.noLink('Google Drive')}`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])

	let limit = isPrems || isOwner ? prem : free
	if (res.fileSize.split('MB')[0] >= limit) return m.reply(`▢ ${msg.limitdl()} *+${free} MB* ${msg.limitdlTe()} *${prem} MB*`) 
	if (res.fileSize.includes('GB')) return m.reply(`▢ ${msg.limitdl()} *+${free} MB* ${msg.limitdlTe()} *${prem} MB*`)

	 await m.reply(`
≡ *Google Drive DL*

▢ *${msg.lname()}:* ${res.fileName}
▢ *${msg.lsize()}:* ${res.fileSize}
▢ *${msg.type()}:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply(msg.errorDl()) 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = true
//handler.premium = true

export default handler
