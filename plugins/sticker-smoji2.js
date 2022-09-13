import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import { EmojiAPI } from 'emoji-api' 
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
	let type = (command).toLowerCase()
	
	switch (type) {
	
	case 'emoji':
	case 'smoji':
	case 'semoji':
let fg = `📌 Ejemplo :
*${usedPrefix + command}* 😎`

if (!args[0]) throw fg
if (args[0]) {
  let emo = [
"whatsapp",
"apple",
"facebook",
"google",
"microsoft",
"samsung",
"skype",
"twitter"]
	let row = Object.keys(emo).map((v, index) => ({
		title: `Emoji ${emo[v]}`,
		rowId: `${usedPrefix}emojidl https://botcahx-rest-api.herokuapp.com/api/emoji/${emo[v]}?emoji=${args[0]}`
	}))
	let button = {
		buttonText: `Click Aquí`,
		description: `*≡ Lista de Opciones*\n\n🔍 Seleccione el tipo de emoji que desea`,
		footerText: igfg
	}
	return conn.sendListM(m.chat, button, row, m)
	} throw fg
	break 
	
	          case 'emojidl':
	            let stek = new Sticker(encodeURI(args[0]), { pack: packname, author: author, type: StickerTypes.FULL })
				let sstick = await stek.toBuffer()
				conn.sendFile(m.chat, sstick, 'sticker.webp', { asSticker: true }, m)
	         break 
	    } 
	
}
handler.help = ['emoji']
handler.tags = ['sticker'] 
handler.command = /^(emoji|smoji|semoji|emojidl)$/i

export default handler
