import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `👻 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 👻\n\n*[ ℹ️ ] Proporciona un texto.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Hola, ¿cómo estás?_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/characterai?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '👻 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 👻\n\n*[ ℹ️ ] No se pudo obtener una respuesta válida.*';
    }
  } catch (error) {
    throw `👻 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 👻\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
  }
};

handler.command = /^aicharacter$/i;

export default handler;
