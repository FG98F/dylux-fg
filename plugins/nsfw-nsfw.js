import fetch from 'node-fetch'
import axios from 'axios'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
   var {age} = global.db.data.users[m.sender]
   if (age <17) throw m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`) 
   
   m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
	//-- nsfw tipo anime
	case 'xwaifu':
        let xwai = await fetch(`https://api.waifu.pics/nsfw/waifu`)
        if (!xwai.ok) throw await xwai.text()
        let xwfu = await xwai.json()
        if (!xwfu.url) throw '❎ Error'
        conn.sendButton(m.chat, `✅ Resultado`, igfg, xwfu.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
       m.react(xmoji)    
  break

case 'xneko':
  let xnek = await fetch(`https://api.waifu.pics/nsfw/neko`)
    if (!xnek.ok) throw await xnek.text()
    let xko = await xnek.json()
    if (!xko.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, xko.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break
	

case 'blowjob':
  let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, json.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break

//--
case 'ass':
case 'culos':
    let xacs = ["https://meme-api.herokuapp.com/gimme/CuteLittleButts", "https://meme-api.herokuapp.com/gimme/ass"]
    let asc = pickRandom(xacs)
    let xass = await fetch(asc)
    if (!xass.ok) throw await xass.text()
    let jass = await xass.json()
    if (!jass.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, jass.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break

case 'boobs':
case 'boobies':
    let xb = ["https://meme-api.herokuapp.com/gimme/tits", "https://meme-api.herokuapp.com/gimme/BestTits", "https://meme-api.herokuapp.com/gimme/boobs", "https://meme-api.herokuapp.com/gimme/amazingtits", "https://meme-api.herokuapp.com/gimme/TinyTits"]
    let bo = pickRandom(xb)
    let xbo = await fetch(bo)
    if (!xbo.ok) throw await xbo.text()
    let boo = await xbo.json()
    if (!boo.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, boo.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break

case 'pussy':
    let xp = ["https://meme-api.herokuapp.com/gimme/pussy", "https://meme-api.herokuapp.com/gimme/LegalTeens"] 
    let pu = pickRandom(xp)
    let xpu = await fetch(pu)
    if (!xpu.ok) throw await xpu.text()
    let puss = await xpu.json()
    if (!puss.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, puss.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
    let lesbi = await fetch(`https://meme-api.herokuapp.com/gimme/lesbians`)
    if (!lesbi.ok) throw await lesbi.text()
    let xlesb = await lesbi.json()
    if (!xlesb.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Resultado`, igfg, xlesb.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(`https://fg-dylux.herokuapp.com/api/nsfw/pack?apikey=FG98`)
	     let cosp = img.data
	     conn.sendButton(m.chat, `✅ Resultado 🤭`, 'Vea más fotos aquí \nhttps://t.me/+8SKOTyja8rBlYTlh \n\n', cosp, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
	     m.react(xmoji) 
	break


default:
 }
}

handler.help = ['xwaifu', 'xneko', 'blowjob', 'ass', 'boobs', 'lesbian', 'pussy', 'pack']
handler.tags = ['nsfw']
handler.command = /^(xwaifu|xneko|blowjob|ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay|pack)$/i
handler.limit = true
handler.register = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
