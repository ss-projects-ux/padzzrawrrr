export default async function(sock, m, args, config) {
    await sock.sendMessage(m.key.remoteJid, { text: "🏓 Pong! Bot aktif gila 🤪" })
}
