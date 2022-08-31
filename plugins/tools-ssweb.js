
let handler = async (m, { conn, command, args, text }) => {
      
    let full = /f$/i.test(command) ? 'on' : 'off'
	
    if (!args[0]) return m.reply('✳️ Ingrese la Url de una página')
    m.react(rwait) 
	let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = 'http://hadi-api.herokuapp.com/api/ssweb?url=' + url + '&device=desktop&full=' + full
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Captura de la Pagina', m)
   
   m.react(done) 

}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 

handler.limit = true
handler.fail = null

export default handler
