import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['967776008370', 'Ze0rO0sama', true],
  ['967776008370'], 
  ['967776008370'] 
] //Numeros de owner 

global.mods = ['967776008370'] 
global.prems = ['967776008370', '967776008370', '967776008370']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '𖤍𓆩ɀꫀ𝘳ꪮ | ࢪ࣪يࢪو𓆪𖤍' 
global.author = '@Ze0rO0sama' 
global.fgig = '▢ Sígueme en Instagram\nhttps://instagram.com/ze0ro0sama\n' 
global.dygp = 'https://chat.whatsapp.com/JYEBaqSmFKCC5sbvSoFZQd'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://www.youtube.com/@Ze0rO0sama'
global.fgpyp = 'https://paypal.me/Ze0rO0sama'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
