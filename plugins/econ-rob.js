//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

    let who
      if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
      else who = m.chat
      if (!who) throw `✳️ Etiqueta a alguien para robar`
      if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * 2000)
    if (users.exp < rob) {
      m.reply(`🔹 @${who.split`@`[0]} tiene menos de *${rob} xp*\nNo robes a un podre v":`, null, { mentions: [who] })
    }
    let time = global.db.data.users[m.sender].lastrob + 1800000
    if (new Date - global.db.data.users[m.sender].lastrob < 1800000) throw `⏱️ Espera ${msToTime(time - new Date())} para volver a robar`
   
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ Robaste *${rob} xp* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['robar', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return minutes + " m " + seconds + " s " 
  }
  
  