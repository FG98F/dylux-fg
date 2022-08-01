// TODO: fix   

import Connection from '../lib/connection.js'
import Store from '../lib/store.js'
import qrcode from 'qrcode'
import ws from 'ws'

const { DisconnectReason } = await import('@adiwajshing/baileys')

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {
    /** @type {import('../lib/connection').Socket} */
    let parent = args[0] && args[0] == 'plz' ? _conn : await Connection.conn
    if (!((args[0] && args[0] == 'plz') || (await Connection.conn).user.jid == _conn.user.jid)) {
        throw '📌 ¡Entra al enlace y envía el mensaje para convertirte en Bot!\n\nhttps://wa.me/' + (await Connection.conn).user.jid.split`@`[0] + '?text=/serbot'
    }

    const id = Connection.conns.size
    const auth = Store.useMemoryAuthState()
    const store = Store.makeInMemoryStore()
    const conn = await Connection.start(null, {
        isChild: true,
        connectionOptions: { auth: auth.state },
        store
    })
    const logout = async () => {
        await parent.sendMessage(conn.user?.jid || m.chat, { text: '⚠️ Conexión perdida...\nReconectando' })
        try { conn.ws.close() } catch { }
        Connection.conns.delete(id)
    }
    let lastQr, shouldSendLogin, errorCount = 0
    conn.ev.on('connection.update', async ({ qr, isNewLogin, lastDisconnect }) => {
        if (shouldSendLogin && conn.user) {
            await parent.sendMessage(conn.user.jid, { text: '✅ Conectado exitosamente con su WhatsApp \n*NOTA:* Sal del grupo de *DyLux  ┃ ᴮᴼᵀ*\nEl número del bot puede cambiar guarde este enlace para unirse al grupo\nhttps://instabio.cc/fg98ff\n\n' + JSON.stringify(conn.user, null, 2) }, { quoted: m })
        }
        if (qr) {
            if (lastQr) lastQr.delete()
            lastQr = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `
Escanea este QR para convertirte en un bot temporal

1. Haga click en los tres puntos en la esquina superior derecha
2. Toque Dispositivos vinculados
3. Escanea este QR

El codigo  QR se cambiara cada 20 segundos
`.trim(), m)
        }
        if (isNewLogin)
            shouldSendLogin = true

        if (lastDisconnect) {
            const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
            if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== ws.CONNECTING) {
                console.log(await Connection.reload(conn, true, { isChild: true }).catch(console.error))
            } else if (code == DisconnectReason.loggedOut)
                logout()
            errorCount++;
        }

        if (errorCount > 5)
            logout()

    })

    Connection.conns.set(id, conn)
}


handler.help = ['serbot']
handler.tags = ['main']

handler.command = ['jadibot', 'serbot'] 

//handler.disabled = true
handler.limit = true

export default handler
