let handler =  m => m.reply(`

≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://paypal.me/fg98f
▢ *Mercado Pago Arg*
• *Link :* https://mpago.la/1F3r6JH
▢ *Tigo Money*
• *N° :*  75140648 

_Al donar consigues_  *Premium* 

• Diamantes ilimitados
• comandos de *menu premium* desbloqueado

`.trim())
handler.help = ['donar']
handler.tags = ['main']
handler.command = ['donar', 'apoyar', 'donate', 'premium'] 

export default handler
