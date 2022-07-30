import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let av = './src/mp3/4.mp3'

conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(buenas noches)$/i
handler.command = new RegExp
export default handler
