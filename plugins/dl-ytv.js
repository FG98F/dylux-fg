
import fetch from 'node-fetch'
import fg from 'fg-dylux' 
import { ytv } from '../lib/y2mate.js'
let limit = 310
let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
   if (!args || !args[0]) throw `✳️ Ejemplo :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ Verifica que el link de YouTube`
 let chat = global.db.data.chats[m.chat]
 m.react(rwait) 
 
 try {
  let { title, size, link, thumb, tipe, quality } = await ytv(text)
  if(Number(size.split(' MB')[0]) >= limit) {
     axios.get(`https://tinyurl.com/api-create.php?url=${link}`).then((G) => {
     return m.reply(` ≡  *FG MUSIC*
     
▢ *📌Título* : ${title}
▢ *⚖️Peso* : ${size}

▢ _El archivo supera el límite de descarga_ *+${limit} MB*
▢ Descarga  Aquí ${G.data}` )  }) 
      } else {  
 conn.sendFile(m.chat, link, title + '.mp4', `
 ≡  *FG MUSIC*
  
▢ *📌Título* : ${title}
▢ *📟Tipo* : ${tipe}
▢ *⚖️Peso* : ${size}
▢ *🎞️Calidad* : ${quality}
`.trim(), m, false, { asDocument: chat.useDocument })
m.react(done)
} 
//-
 } catch {  	
	let { title, size, result, quality } = await fg.downloader.youtube.ytmp4(args[0])
    if(Number(size.split(' MB')[0]) >= limit) {
     axios.get(`https://tinyurl.com/api-create.php?url=${result}`).then((G) => {
     return m.reply(` ≡  *FG MUSIC 2*
     
▢ *📌Título* : ${title}
▢ *⚖️Peso* : ${size}

▢ _El archivo supera el límite de descarga_ *+${limit} MB*
▢ Descarga  Aquí ${G.data}` )  }) 
      } else {  
     conn.sendFile(m.chat, result, title + '.mp4', `
 ≡  *FG MUSIC 2*
  
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp4
▢ *🎞️Calidad* : ${quality}
▢ *⚖️Peso* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
}
} //--

}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'fgmp4']
handler.diamond = true

export default handler
