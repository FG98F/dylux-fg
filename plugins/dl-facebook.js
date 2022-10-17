
import fg from 'fg-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `✳️ Ingrese un link de un video de Facebook\n\n📌 Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
  let res = await fg.fbdl(args[0])
  let vid = res.data[0].url
  let cal = res.data[0].quality   
  let te = `
┌─⊷ FBDL
▢ *Calidad:* ${cal}
└───────────`
  conn.sendFile(m.chat, vid, 'fb.mp4', te, m)
  m.react(done)
  } catch (e) {
	m.reply('❎ Ocurrió un error Revisa que link sea correcto')
	} 
	
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
