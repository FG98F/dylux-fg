let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `✳️ _Envie el texto_\n\n📌Ejemplo *${usedPrefix + command}* dylux-fg`
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <text>']
handler.tags = ['sticker']

handler.command = ['attp'] 

export default handler
