import db from '../lib/database.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, isPrems}) => {

  let hasil = Math.floor(Math.random() * 5000)
  let time = db.data.users[m.sender].lastwork + 600000
  if (new Date - db.data.users[m.sender].lastwork < 600000) throw `*Estas cansado* y por lo tanto hay que esperar ${msToTime(time - new Date())} para volver a trabajar!`
  let anu = (await axios.get('https://raw.githubusercontent.com/FG98F/team-fg/main/games/work.json')).data
    let json = pickRandom(anu)

  m.reply(`
‣ ${json.fgwork} *${hasil} XP*
`)
  db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'w', 'trabajar']


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

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

