
import fetch from 'node-fetch'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import { sticker } from '../lib/sticker.js'
import { EmojiAPI } from 'emoji-api' 
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let fg = `
 ✳️ Uso del comamdo
*${usedPrefix + command}* <tipo> <emoji>

📌 Ejemplo :
*${usedPrefix + command}* fa 😎

┌─⊷ *TIPOS* 
▢ wa = whatsapp  
▢ ap = apple
▢ fa = facebook
▢ ig = Instagram
▢ go = google
▢ ht = htc
▢ mi = microsoft
▢ mo = mozilla
▢ op = openmoji
▢ pi = pixel
▢ sa = samsung
▢ tw = twitter
└─────────────

Solo puede usar 1 emoji, preste atención a los espacios`
  if (!args[0]) throw fg

  let template = (args[0] || '').toLowerCase()
  if (!args[1]) throw fg
  if (/moj/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[0].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[6].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
           })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[1].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[12].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'lg':
        case 'ig':
        case 'instagram':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[11].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[3].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[13].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[8].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[7].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'samsung':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[2].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stek = new Sticker(encodeURI(emoji.images[5].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
              conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
        case 'wha':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
            let stek = new Sticker(encodeURI(emoji.images[4].url), { pack: packname, author: author, type: StickerTypes.FULL })
			  let stiker = await stek.toBuffer()
             conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
             })
          break
      }
    } catch (e) {
      throw fg
    }
  }
}
handler.help = ['emoji <tipo> <emoji>']
handler.tags = ['sticker'] 
handler.command = ['emoji', 'smoji', 'semoji']
handler.diamond = true

export default handler
