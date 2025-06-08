import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    // `<title>` campo en el xml generado
    title: 'Wolf2Lyon Dev',
    // `<description>` campo en el xml generado
    description: 'Desarrollo web y aplicaciones a medida para negocios y emprendedores. Sitios modernos, rápidos y a tu medida. ¡Haz crecer tu proyecto con un freelance profesional!',
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: [],
    // (opcional) inyecta xml personalizado
    customData: `<language>es</language>`,
  });
}