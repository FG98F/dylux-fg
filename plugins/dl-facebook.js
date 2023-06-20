
import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Envíe el link de un video de Facebook\n\n📌 Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '⚠️ POR FAVOR, PROPORCIONE UNA URL VÁLIDA.';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── {*FBDL*} ─── ⊰
↳ *Título:* ${result.title}
⊱ ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ Se ha producido un error al procesar la solicitud. Inténtalo de nuevo más tarde.');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;

