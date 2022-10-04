
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = ` 🔴 Adiós shavales  *${this.user.name}* saldrá del grupo \n\nfinalizo su alquiler`
        await this.reply(m.chat, caption, null)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
