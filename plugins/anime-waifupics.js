import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
	case 'loli':
	     let img = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
	     let loli = pickRandom(img)
	     conn.sendFile(m.chat, loli, 'loli.png', '✅ Random Loli', m)
	     m.react(dmoji) 
	break
case 'waifu':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
  conn.sendFile(m.chat, json.url, 'waifu.png', '✅ Random Waifu', m)
   m.react(dmoji) 
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw '❎ Error'
  conn.sendFile(m.chat, neko.url, 'neko.png', '✅ Random Neko', m)
  m.react(dmoji) 
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw '❎ Error'
  conn.sendFile(m.chat, megumin.url, 'megumin.png', '✅ Random Megumin', m)
  m.react(dmoji) 
break

default:
 }
}

handler.help = ['waifu', 'neko', 'megumin', 'loli']
handler.tags = ['nime']
handler.command = ['waifu', 'neko', 'megumin', 'loli'] 
handler.limit = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
