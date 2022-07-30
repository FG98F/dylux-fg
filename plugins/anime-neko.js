import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw '❎ Error'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['neko']
handler.tags = ['nime']
handler.command = ['neko'] 
handler.limit = true

export default handler
