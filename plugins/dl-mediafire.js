
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
import fg from 'api-dylux'
let free = 150 // limite de descarga
let prem = 300 //si su servidor tienes menos de 2GB baja el límite
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Ingrese el link de mediafire junto al comando`
    if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`
    m.react(rwait)
    
    let limit = isPrems || isOwner ? prem : free
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = limit * 1024 < filesize
    let caption = `
   ≡ *MEDIAFIRE*
▢ *Nombre:* ${filename}
▢ *Tamaño:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Subido:* ${aploud}
${isLimit ? `\n▢ El archivo supera el límite de descarga *+${free} MB*\nPásate a premium para poder descargar archivos más de *${prem} MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)  
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let isLimit = limit * 1024 < filesizeB
    let caption = `
   ≡ *MEDIAFIRE*
▢ *Nombre:* ${filename}
▢ *Tamaño:* ${filesize}
▢ *Extension:* ${ext}
▢ *Subido:* ${upload_date}
${isLimit ? `\n▢ El archivo supera el límite de descarga *+${free} MB*\nPásate a premium para poder descargar archivos más de *${prem} MB*` : ''} 
`.trim()

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: intenta con otro link`)
}

  }
  
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = true
handler.premium = false

export default handler
