import db from '../lib/database.js'

let handler = m => m

handler.before = async function (m, {conn} ) {
	
   if (m.sender.startsWith('212' || '212')) {
   	db.data.users[m.sender].banned = true
m.reply(`✳️ El anti árabes está activo para evitar spam\n\nHasta la próxima`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	db.data.users[m.sender].banned = true
m.reply(`✳️ El anti árabes está activo para evitar spam\n\nHasta la próxima`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
    }
export default handler
