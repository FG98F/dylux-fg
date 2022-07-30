
import axios from 'axios'
import cheerio from 'cheerio' 

async function fgTtdl (Url) {
	return new Promise (async (resolve, reject) => {
		await axios.request({
			url: "https://ttdownloader.com/",
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const token = $('#token').attr('value')
			axios({
				url: "https://ttdownloader.com/req/",
				method: "POST",
				data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
					"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
				const result = {
					status: res.status,
					result: {
						nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
						watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
						audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
					}
				}
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})
}


let handler = async (m, { conn, args, usedPrefix, command, text}) => {
	
 if(!text) throw `✳️ Ingrese un link de Tiktok\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMLTvVagx/?k=1`
     let ttdl = await fgTtdl(text)
    if (!args[0].match(/tiktok/gi)) throw `❎ verifica que el link sea de tiktok`
    await m.reply(wait)
		
  if(command.includes('nowm')) {
      conn.sendFile(m.chat, ttdl.result.nowatermark, 'tiktok.mp4', `✅ Aquí tienes`.trim(), m)
   } else if (command.includes('audio')) {
     conn.sendFile(m.chat, ttdl.result.nowatermark, 'tiktok.mp3', null, m, null, { mimetype: 'audio/mp4' })
   } else {
     conn.sendHydrated(m.chat, `✅ Aquí tienes`, igfg, ttdl.result.watermark, null, null, null, null, [['📹 NOWM', `${usedPrefix}tiktoknowm ${text}`]], m)
   }
   
}
handler.help = ['tiktok', 'tiktoknowm']
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktoknowm', 'tiktokaudio'] 

handler.premium = false
handler.limit = true

export default handler
