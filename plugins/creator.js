import fetch from "node-fetch"
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)

    if (command == "creator") {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner Maxxy;Bot;;Md\nFN:Saya Owner Maxxy Bot WhatsApp, Md\nNICKNAME:👑 Owner Maxxy Bot\nORG:Vinss\nTITLE:soft\nitem1.TEL;waid=6285380166282:+62 853-8016-6282\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://lynk.id/kahfi.xd\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:maxxybotz@mail.com\nitem3.X-ABLabel:💌 Mail Owner MaxxyBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 13 January 2001\nEND:VCARD`
        let tag_own = await conn.sendMessage(m.chat, {
            contacts: {
                displayName: wm,
                contacts: [{
                    vcard
                }]
            }
        }, {
            quoted: fakes
        })
        await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, tag_own, {
            mentions: [m.sender]
        })
    }
    if (command == "pengembang") {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285380166282:+62 853-8016-6282\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
        await conn.sendMessage(m.chat, {
            contacts: {
                displayName: wm,
                contacts: [{
                    vcard
                }]
            }
        }, {
            quoted: fakes
        })
    }
    if (command == "owner") {
        try {
            let sentMsg = await conn.sendContactArray(m.chat, [
                [nomorown, await conn.getName(nomorown + "@s.whatsapp.net"), "👑 Developer Bot ", "🚫 Dont call me 🥺", "maxxybotz@gmail.com", "🇮🇩 Indonesia", "🚀 https://Maxxy-Botz.github.io/", "👤 Gada pawang nih senggol dong 😔"],
                [conn.user.jid.split("@")[0], await conn.getName(conn.user.jid), "🔥 Bot WhatsApp 🐣", "📵 Dont spam/call me 😢", "Nothing", "🇮🇩 Indonesia", "🚀 https://lynk.id/kahfi.xd", "🤖 Hanya bot biasa yang kadang suka eror ☺"]
            ], m)
            await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {
                mentions: [m.sender]
            })
        } catch {
            let sentMsg = await conn.sendContact(m.chat, nomorown, await conn.getName(nomorown + "@s.whatsapp.net"), m)
            await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {
                mentions: [m.sender]
            })
        }
    }
}
handler.help = ["owner", "creator", "pengembang"]
handler.tags = ["info"]
handler.command = /^(owner|pengembang|creator)$/i

export default handler