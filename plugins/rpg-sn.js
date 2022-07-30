import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`
▢ *Numero de serie* : ${sn}
`.trim())
}
handler.help = ['nserie']
handler.tags = ['rg']
handler.command = ['nserie', 'sn'] 
handler.register = true
export default handler
