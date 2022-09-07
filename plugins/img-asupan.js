
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let img = await conn.getFile(`https://fg-dylux.herokuapp.com/api/asupan?apikey=FG98`)
    let asupan = img.data
    conn.sendButton(m.chat, `✅ Resultado`, igfg, asupan, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
    m.react(dmoji)
}

handler.help = ['tvid']
handler.tags = ['img']
handler.command = ['asupan', 'tvid', 'videos', 'vid', 'video']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
