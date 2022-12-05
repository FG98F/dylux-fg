
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`) 
   
   m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
	//-- nsfw tipo anime
	case 'xwaifu':
        let xwai = await fetch(`https://api.waifu.pics/nsfw/waifu`)
        if (!xwai.ok) throw await xwai.text()
        let xwfu = await xwai.json()
        if (!xwfu.url) throw '❎ Error'
        conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xwfu.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
       m.react(xmoji)    
  break

case 'xneko':
  let xnek = await fetch(`https://api.waifu.pics/nsfw/neko`)
    if (!xnek.ok) throw await xnek.text()
    let xko = await xnek.json()
    if (!xko.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xko.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break
	

case 'blowjob':
  let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, json.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

//--
case 'ass':
case 'culos':
    let as = await conn.getFile(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, as.data, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'boobs':
case 'boobies':
    let xb = await conn.getFile(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xb.data, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pussy':
    let xp = await conn.getFile(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xp.data, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
    let les = await conn.getFile(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))
   conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, les.data, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
	     conn.sendButton(m.chat, `✅ Resultado 🤭\n Random *${command}*`, fgyt, img.data, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
	     m.react(xmoji) 
	break


default:
 }
}

handler.help = ['xwaifu', 'xneko', 'blowjob', 'ass', 'boobs', 'lesbian', 'pussy', 'pack']
handler.tags = ['nsfw']
handler.command = /^(xwaifu|xneko|blowjob|ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay|pack)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler
