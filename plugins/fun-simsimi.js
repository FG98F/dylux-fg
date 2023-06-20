import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `Hola *${name}*, ¿Quieres hablar? Responda con *${usedPrefix + command}* (su mensaje)\n\n📌 Ejemplo: *${usedPrefix + command}* Hola bot`;
  }
  
  m.react('🗣️');
  
  const uid = encodeURIComponent(m.sender);
  const msg = encodeURIComponent(text);
  
  const res = await fetch(`http://api.brainshop.ai/get?bid=176001&key=M4fzqfe99b3THOYi&uid=${uid}&msg=${msg}`);
  const json = await res.json();
  
  if (json.cnt) {
    const reply = json.cnt;
    m.reply(reply);
  } else {
    throw json;
  }
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
