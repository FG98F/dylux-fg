import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['524922108173', 'FG98', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
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
global.packname = 'Sniperghost-bot┃ᴮᴼᵀ' 
global.author = '@Sniperghost662009' 
global.fgig = '▢https://instagram.com/axelnadhirhernandez?igshid=ZDdkNTZiNTM=' 
global.dygp = ''
global.fgsc = 'oculto' 
global.fgyt = 'no existe'
global.fgpyp = ''
global.fglog = ' 

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
