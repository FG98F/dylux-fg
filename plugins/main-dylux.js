
let handler = async (m, { conn }) => {

m.reply( `
≡  *KanBot 🥀┃ GRUPOS*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Grupo *1*
https://chat.whatsapp.com/F7xxlnQ0VHg73IW5gJPtBA 

▢ Grupo *2*
https://chat.whatsapp.com/GSJKM1ggtyC45gu7RhCXgM 

escribe /menu para ver los comandos 

◈ ━━━━━━━━━━━━━━━━━━━━◈` ) 

m.react('👻')

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groupdylux', 'dxgp', 'dygp', 'gpdylux', 'support'] 

export default handler
