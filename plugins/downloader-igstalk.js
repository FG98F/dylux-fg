import { instagramStalk } from '@bochilteam/scraper'
import { igStalk } from '../lib/scraper.js'

let handler= async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Escriba un Nombre de Usuario\n\n📌Ejemplo : ${usedPrefix + command} fg98._`
    
    let res = await igStalk(text)
    if (!res) throw res
    let caption = `
┌──「 *STALKING* 
▢ *🔖 Nombre* : ${res.name} 
▢ *🔖 Username* : ${res.username}
▢ *👥 Seguidores* : ${res.followersH}
▢ *🫂 Siguiendo* : ${res.followingH}
▢ *📌 Bio :* ${res.description}
▢ *🏝️ Posts:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└──────────────
`
 if (res.profilePic) return conn.sendMessage(m.chat, { image: { url: res.profilePic }, caption }, { quoted: m })
 m.reply(caption)
}

handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 

export default handler
