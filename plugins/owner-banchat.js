//import db from '../lib/database.js'

let handler = async (m, { conn, participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ Se desactivo el Bot en este grupo')
    // } else m.reply('Aquí hay un número de host...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 

handler.owner = true

export default handler
