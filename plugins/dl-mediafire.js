
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
let free = 150 // limite de descarga
let prem = 500
let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	  
   if (!args[0]) throw `✳️ ${msg.noLink('Mediafire')}`
    if (!args[0].match(/mediafire/gi)) throw `❎ ${msg.linkE()}`
    m.react(rwait)

    try {
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? prem : free) * 1012 < filesize
    let caption = `
   ≡ *MEDIAFIRE DL*

▢ *${msg.lname()}:* ${filename}
▢ *${msg.lsize()}:* ${filesizeH}
▢ *${msg.type()}:* ${ext}
▢ *${msg.uplaud()}:* ${aploud}
${isLimit ? `\n▢ ${msg.limitdl()} *+${free} MB* ${msg.limitdlTe()} *${prem} MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
  } catch {
		m.reply(msg.errorDl()) 
  }
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = true
handler.premium = false

export default handler
