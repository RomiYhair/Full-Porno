import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `𝗜𝗻𝗴𝗿𝗲𝘀𝗮 𝗘𝗹 𝗡𝘂𝗲𝘃𝗼 𝗡𝗼𝗺𝗯𝗿𝗲 𝗗𝗲𝗟 𝗚𝗿𝘂𝗽𝗼 🕷️\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 :\n.𝘀𝗲𝘁𝗻𝗮𝗺𝗲 𝗦𝗽𝗶𝗱𝗲𝗿 𝗕𝗼𝘁 🕷️`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
  if (!text) throw `𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐨 𝐍𝐨 𝐏𝐮𝐞𝐝𝐞 𝐒𝐞𝐫 𝐓𝐚𝐧 𝐋𝐚𝐫𝐠𝐨 𝐄𝐥 𝐍𝐨𝐦𝐛𝐫𝐞 🕷️`;
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
