
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
		let bio = `\n🟢 Tiempo Activo ${uptime}\n\n┃ 💎  By FG98`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
}

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Días ️', h, ' Horas ', m, ' Minutos ', s, ' Segundos'].map(v => v.toString().padStart(2, 0)).join('')
}
