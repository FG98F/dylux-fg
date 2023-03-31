
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  'buenos días': 'https://j.top4top.io/m_26464yyei1.mp3',
  'buenas tardes': 'https://i.top4top.io/m_2646qxac91.mp3',
  'buenas noches': 'https://h.top4top.io/m_26460eg6v1.mp3',
  'sad': 'https://h.top4top.io/m_2474fhcbh1.mp3',
  '@5492622271736|@59172945992': 'https://l.top4top.io/m_2492i4mdu1.mp3'
}
