import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let name = conn.getName(m.sender)
  if (!text) throw `Hola *${name}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n📌 Ejemplo : *${usedPrefix + command}* Hola bot`
  try {
  let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  let tes = json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')
    m.reply(`${tes}`) 
  } catch {
    m.reply('😔 No entiendo')
  }
}

handler.help = ['bot']
handler.tags = ['main']
handler.command = ['bot', 'simi'] 

export default handler
