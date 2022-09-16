
let handler = async(m, { conn, usedPrefix, command }) => {

    let donat = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *PayPal*
• *Link :* https://paypal.me/fg98f
▢ *Mercado Pago Arg*
• *Link :* https://mpago.la/1F3r6JH
▢ *Tigo Money*
• *N° :*  75140648 
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, donat,'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
