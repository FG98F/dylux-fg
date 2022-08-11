
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let asu = ["asupan", "asupan-la"]
    let asufg = pickRandom(asu)
	let asupan = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/${asufg}.json`)).data
    conn.sendButton(m.chat, `✅ Resultado`, igfg, pickRandom(asupan), [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
    m.react(dmoji)
}

handler.help = ['asupan']
handler.tags = ['img']
handler.command = ['asupan']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
