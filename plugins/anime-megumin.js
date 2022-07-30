import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw '❎ Error'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['megumin']
handler.tags = ['nime']
handler.command = ['megumin'] 
handler.limit = true

export default handler
