import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
	case 'loli':
	     let img = await conn.getFile(`https://fg-dylux.herokuapp.com/api/nime/loli?apikey=FG98`)
	     let loli = img.data
	     conn.sendButton(m.chat, `✅ Random ${command}`, igfg, loli, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
	     m.react(dmoji) 
	break
	
case 'waifu':
case 'megumin':
case 'neko':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Random ${command}`, igfg, json.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(dmoji) 
break


default:
 }
}

handler.help = ['waifu', 'neko', 'megumin', 'loli']
handler.tags = ['nime']
handler.command = ['waifu', 'neko', 'megumin', 'loli'] 
handler.diamond = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
