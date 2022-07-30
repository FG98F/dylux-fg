function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *FG98*
▢ Instagram :
  • https://instagram.com/fg98._
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • https://github.com/FG98F
▢ Telegram : 
  • t.me/fgsupp_bot (FG) 
  • t.me/fg98ff (canal)
  • t.me/fgawgp (grupo)
▢ Facebook : 
  • https://facebook.com/fg98ff/
  • https://facebook.com/fg98A/
▢ YouTube : 
  • https://youtube.com/fg98f
  
 *≡ HELPERS*
  *CRISS*
▢ Instagram : https://www.instagram.com/sayurizuniga3
▢ WhatsApp : wa.me/
  *ANDREA*
▢ Instagram : https://
▢ WhatsApp : wa.me/573125484672
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
