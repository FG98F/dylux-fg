
export async function all(m) {
	
    // cuando alguien envía un enlace de un grupo al dm del bot
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*Invitar bot a un grupo* 
        
  Hola @${m.sender.split('@')[0]} 
  puedes alquilar el bot para que se una a tu grupo habla con el creador en *Alquilar*
`.trim(), fgig, null, [['⦙☰ Menu', '/help'], ['⌲ Alquilar', '/owner']], m, { mentions: [m.sender] })
    m.react('💎') 
    
  } 
  
   return !0
}
