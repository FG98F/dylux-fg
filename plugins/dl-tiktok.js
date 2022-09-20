
import fg from 'fg-dylux'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Ingrese un link de Tiktok\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `❎ verifica que el link sea de tiktok`
m.react(rwait)
    let p = await fg.downloader.tiktok(text) 
				let te = `
┌─⊷ TIKTOK
▢ *Creador:* FG98
▢ *Username:* ${p.author}
▢ *Descripción:* ${p.title}
└───────────`
    conn.sendButton(m.chat, te, igfg, p.nowm, [['⎘ Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]],m)
    m.react(done)
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler
