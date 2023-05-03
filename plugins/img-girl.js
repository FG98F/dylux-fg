
import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
	let girl = await conn.getFile(global.API('fgmods', '/api/img/girl', { }, 'apikey'))
	let img = girl.data
   await conn.sendButton(m.chat, '✅ Resultado 🤭', fgig, img, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']
handler.diamond = true

export default handler
