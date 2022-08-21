let handler = async (m, { conn }) => { 
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
   // if (!isBaileys) throw '✳️ *Ese no es mi mensaje*'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = ['del', 'delete'] 
handler.admin = true 

export default handler
