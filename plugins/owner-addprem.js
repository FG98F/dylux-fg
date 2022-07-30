import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `✳️ Etiqueta o menciona a alguien\n\n📌 Ejemplo : ${usedPrefix + command} @user 7`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `✳️ Ingrese el número de días que tendrá premium`
    if (isNaN(txt)) return m.reply(`✳️ Ingrese un número\n\nEjemplo : ${usedPrefix + command} @user 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    
conn.reply(m.chat, `
✅ PREMIUM

@${who.split`@`[0]} ahora te conviertes en un usuario premium
┌───────────
▢ *Nombre:* ${user.name}
▢ *Expira en :* ${txt} Días
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag> <días>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
