
let handler = async (m, { conn, text, usedPrefix, command }) => {
	
	if (!text) throw `✳️ Ingrese un texto corto\n\n📌 Ejemplo  : ${usedPrefix + command} FG98`
	m.react(rwait)
	let img = global.API('fgmods', '/api/lolimaker', { text }, 'apikey')
	conn.sendFile(m.chat, img, 'logo.png', `✅ Resultado`, m)
	m.react(done)
} 
handler.help = ['lolimaker <text>']
handler.tags = ['maker']
handler.command = ['mloli', 'lolimaker'] 
handler.diamond = true

export default handler
