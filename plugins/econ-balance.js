//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(who) 
    let user = global.db.data.users[who]
 
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌Nombre* : _@${who.split('@')[0]}_
▢ *💎Diamantes* : _${global.db.data.users[who].diamond}_
▢ *⬆️XP* : _Total ${global.db.data.users[who].exp}_
└──────────────

*NOTA :* 
Puedes comprar 💎 diamantes usando los comandos
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
