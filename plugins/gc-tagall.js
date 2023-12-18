const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `🕷️ 𝗦𝗽𝗶𝗱𝗲𝗿 𝗕𝗼𝘁 / @𝗦𝗽𝗶𝗱𝗲𝗿.𝗩𝗲𝗻𝘁𝗮𝘀.𝗕𝗼𝘁 🕷️ ${pesan}\n`;
  let teks = `𝗦𝗽𝗶𝗱𝗲𝗿 𝗕𝗼𝘁 𝗧𝗲 𝗜𝗻𝘃𝗼𝗰𝗮 𝗣𝗹𝗮𝗻𝘁𝗶𝘁𝗮 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 𝗚𝗼𝗼 🕷️\n\n${oi}\n`;
  for (const mem of participants) {
    teks += `ִ໋🕷️ ➢ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
