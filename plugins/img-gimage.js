
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Ingrese la imagen que quiere buscar \n\n📌 Ejemplo: *${usedPrefix + command}* Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❎ No se encontró la imagen intente con otro'
  conn.sendFile(m.chat, url, 'img.png', `
✅ Resultado de : *${text}*

⏣ *Ancho*: ${width}
⏣ *Altura*: ${height}
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


