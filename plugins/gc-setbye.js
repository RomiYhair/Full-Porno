const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗗𝗲 𝗗𝗲𝘀𝗽𝗲𝗱𝗶𝗱𝗮 𝗦𝗲 𝗖𝗮𝗺𝗯𝗶𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲 🕷️');
  } else throw `𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗲 𝗗𝗲 𝗘𝘀𝗿𝘁𝗮 𝗠𝗮𝗻𝗲𝗿𝗮 : .𝘀𝗲𝘁𝗯𝘆𝗲 𝗧𝗲 𝗦𝗮𝗹𝗶𝘀𝘁𝗲 𝗗𝗲𝗹 𝗦𝗽𝗶𝗱𝗲𝗿 𝗕𝗼𝘁 🕷️`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
