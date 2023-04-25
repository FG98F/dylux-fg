
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 El grupo no admite contenido nsfw \n\nPara habilitar escriba \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Eres menor de edad! vuelve cuando tengas más de 18 años`
  if (!text) throw `✳️ Para buscar\n📌 Use : *${usedPrefix + command} <search>*\n\nPara descargar desde URL:\n📌Use : *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Ingrese un link de *xnxx.com*`)
        try {
            let xn = await (await fetch(global.API('fgmods', '/api/xnxxdl', { url: text }, 'apikey'))).json()
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Título*: ${xn.result.title}
▢ *⌚Duración:* ${xn.result.duration}
▢ *🎞️Calidad:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Error : intenta mas tarde`)
 }
    } else {
        try {
            let res = await fetch(global.API('fgmods', '/api/xnxxsearch', { q: text }, 'apikey'))
            let json = await res.json()
             let listSections = []
              Object.values(json.result).map((v, index) => {
              listSections.push([`${index}┃ ${v.title}`, [
                    ['🎥 MP4', `${usedPrefix}xnxxdl ${v.link}`, `▢ 📌 *Título* : ${v.title}`]
                  ]])
              })
              //return conn.sendList(m.chat, '  ≡ *XNXX DL*🔎', `\n 🔞 Resultados de:\n *${text}*`, fgig, `Click Aquí`, listSections, m)
              let ff = json.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (json.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error: intenta mas tarde`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
