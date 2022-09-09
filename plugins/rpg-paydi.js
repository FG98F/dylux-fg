//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Menciona al usuario con @user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Ingrese la cantidad de *Diamantes* que quiere transferir'
    if (isNaN(txt)) throw '🔢 sólo números'
    let poin = parseInt(txt)
    let limit = poin
    let imt = Math.ceil(poin * impuesto)
    limit += imt
    if (limit < 1) throw '✳️ Mínimo es  *1*'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw '✳️ *Diamantes* insuficiente para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin
    
    await m.reply(`≡ *TRANSFERENCIA 💎*
┌──────────────
▢ *${-poin}* Diamantes 
▢ Impuesto 2% : *${-imt}* Diamantes
▢ Total gastado: *${-limit}* Diamantes
└──────────────`)
    conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${poin}* Diamantes`, who, m.text)
}
handler.help = ['paydi @user <monto>']
handler.tags = ['xp']
handler.command = ['paydi', 'transferdiamond', 'transferdi'] 
handler.rowner = false

export default handler

