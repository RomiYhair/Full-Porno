const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola Querido Usuario Este Es El Unico Grupo Oficial De Ventas Only Bot 👻*
  
  1 - https://chat.whatsapp.com/BeBCJKgbAguFIfWuzfo7DM`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/spider.ventas.bot/`},
    'mimetype': `application/${document}`,
    'fileName': `🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/spider.ventas.bot/',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/spider.ventas.bot/'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
