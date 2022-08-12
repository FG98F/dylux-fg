import db from '../lib/database.js'

let handler = async (m, { conn, isPrems}) => {


  let hasil = Math.floor(Math.random() * 1000)
  let time = db.data.users[m.sender].lastmiming + 600000
  if (new Date - db.data.users[m.sender].lastmiming < 600000) throw `⏲️ _Espera_ ${msToTime(time - new Date())} _para regresar a la mina_`
  db.data.users[m.sender].exp += hasil
  m.reply(`
🎉 Genial! minaste *${hasil} XP*`)
  db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine'] 

handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m y " + seconds + " s " 
}
