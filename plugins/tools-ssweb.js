
import fetch from 'node-fetch'
import fg from 'fg-apis'

let handler = async (m, { conn, command, args, text }) => {
if (!args[0]) return m.reply('✳️ Ingrese la Url de una página')
    m.react(rwait) 
    let ssweb = await fg.tools.ssweb(text)
    let ss = ssweb.result
	//let ss = await (await fetch(`https://shot.screenshotapi.net/screenshot?url=${args[0]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)).buffer() 
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Captura de la Pagina', m)
   
   m.react(done) 

}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 

handler.limit = true
handler.fail = null

export default handler
