import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	//let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
	let girl = await axios.get(`https://fg-dylux.herokuapp.com/api/img/girl?apikey=FG98`)
	let img = girl.data.result
   await conn.sendButton(m.chat, '✅ Resultado 🤭', 'Click en siguiente para ir a la siguiente imagen', img, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
