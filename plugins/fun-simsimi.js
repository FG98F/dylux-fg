import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hola *${name}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n📌 Ejemplo : *${usedPrefix + command}* Hola bot`
  m.react('🗣️') 
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['main']
handler.command = ['bot', 'simi'] 

export default handler
