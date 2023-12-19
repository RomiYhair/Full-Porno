const handler = async (m, {conn}) => {
  m.reply(global.paises);
};
handler.command = /^(mipais|PrecioFull)$/i;
export default handler;

global.paises = `
*Estos Son Los Precios Del Bot Full En Los Siguientes Paises 🌍 :*

*1 - 🇨🇱 Chile : 4,500.01 Clp*
*2 - 🇦🇷 Argentina : 5.500 Peso Argentino*
*3 - 🇵🇪 Peru : 17 Soles*
*4 - 🇨🇴 Colombia : 17,820.57 Peso Colombiano*
*5 - 🇧🇴 Bolivia : 31.24 Boliviano*
*6 - 🇲🇽 Mexico : 100.00 Peso Mexicano*
*7 - 🇵🇾 Paraguay : 33,040.65 Guaraní Paraguayo*
*8 - 🇺🇸 Ee.Uu : 5.00 Dolares*

*Si Tu Pais No Aparece Preguntame Por Tu Pais 🥵 Recuerda Los Pagos Son Para El Bot Full*

🕷️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗕𝗢𝗧 🕷️
`;

