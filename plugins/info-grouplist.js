import Connection from '../lib/connection.js'

let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(Connection.store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🗂️ ${jid} [${chat?.metadata?.read_only ? 'Fuera' : 'Dentro'}]\n\n`
    m.reply(`≡ *LISTA de Grupos:*
${txt}
`.trim())
}
handler.help = ['grouplist']
handler.tags = ['owner']
handler.command = ['grouplist', 'listgroup'] 

export default handler