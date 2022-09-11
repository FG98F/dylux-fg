//import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(who) 
    let user = global.db.data.users[who]
   let { min, xp, max } = xpRange(user.level, global.multiplier)
 
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌Nombre* : _@${who.split('@')[0]}_
▢ *💎Diamantes* : _${global.db.data.users[who].diamond}_
▢ *⬆️XP* : _${user.exp - min}_
└──────────────

*NOTA :* 
Puedes comprar 💎 diamantes usando los comandos
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
