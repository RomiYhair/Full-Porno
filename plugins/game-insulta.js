const handler = async (m, {
  conn, text,
}) => {
  if (!m.isGroup) {
    throw '';
  }
  const gruppi = global.db.data.chats[m.chat];
  if (gruppi.spacobot === false) {
    throw '';
  }
  const menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  if (!menzione) throw '*a quien deseas insultar?*';
  m.reply(`@${menzione.split`@`[0]} ${pickRandom(['oh serrano de mrd', 'que azco un bot de mrd', 'maldito aborto de mrd', 'vete a la mrd', 'oh imbecil de mrd', 'vamos a jugar free fre oh ctmr', 'tu mama la calata hdp', 'a tu mama la follaron 10 negros '])}`, null, { negros
    mentions: [menzione],
  });
};
handler.customPrefix = /iNSULTO/i;
handler.command = new RegExp;
export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
      }
