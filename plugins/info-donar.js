/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =` 🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️

  *Hola ${name} Deseas Donar :3*
  
*Paypal : https://paypal.me/CristhoferRojas810?country.x=PE&locale.x=es_XC*
*Yape : 976336831*
*Nombre Del Yape : Mary Luz*

🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️ 
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
