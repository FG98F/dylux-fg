import { facebookDl } from '../lib/scraper.js'
import { savefrom } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
	if (!text) throw `✳️ Ingrese ul link de un video de Facebook\n\n📌 Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
   if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `❎ *Link incorrecto*`
m.react(rwait)
  try {
	let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
	if (!res) throw '❎ No puedo descargar la publicación'
	let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
	
	conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '' }, { quoted: m })
    m.react(done)
    } catch { 
    	await m.react(error)
     throw `❎ Ocurrió un error, Revise que el link sea de Facebook`
     
        }
}
handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = ['fb', 'facebook', 'fbdl'] 

handler.limit = true

export default handler
