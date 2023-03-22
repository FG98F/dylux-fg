
let handler = async (m, { conn }) => {
  const uptime = process.uptime() * 1000;
  const uptimeStr = clockString(uptime);
  await conn.reply(m.chat, `🏮 *Bot activo durante*  \n\n${uptimeStr}`, m);
};
handler.help = ['runtime'];
handler.tags = ['main'];
handler.command = ['runtime', 'uptime']

export default handler

function clockString(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000));
  let hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((ms % (60 * 1000)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
