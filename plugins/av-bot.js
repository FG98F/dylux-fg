import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["criss", "andrea"]
let nfg = pickRandom(fgac)
let av = `./src/mp3/${nfg}.mp3`

conn.sendButton(m.chat, `Hola *${name}* \n \nNecesitas ayuda? \n`, igfg, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'ad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(bot|dylux)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
