//import db from '../lib/database.js'

let handler = async (m, { conn, participants }) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ Se desactivo el Bot en este grupo')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 
handler.owner = true
handler.admin = true

export default handler
