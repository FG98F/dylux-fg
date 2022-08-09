/*
import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
let full = /f$/i.test(command)
if (!args[0]) return m.reply('✳️ Ingrese la Url de una página')
m.react(rwait) 
let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
conn.sendFile(m.chat, ss, 'screenshot.png', '✅ Captura de la Pagina', m)
m.react(done) 
}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 

export default handler
*/

import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
if (!args[0]) return m.reply('✳️ Ingrese la Url de una página')
    m.react(rwait) 
	let ss = await (await fetch(`https://shot.screenshotapi.net/screenshot?url=${args[0]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)).buffer() 
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Captura de la Pagina', m)
   
   m.react(done) 

}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 

handler.limit = true
handler.fail = null

export default handler
