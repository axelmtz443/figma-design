/* export const schemaTypes = [] */


// sanity-studio/schemaTypes/index.ts

import { ourProject } from './ourProject'
import { successStory } from './successStory'
import { mktDigitalProject } from './mktDigitalProject'
import { marketResearchProject } from './marketResearchProject'
import { portfolioCase } from './portfolioCase'
import { teamMember } from './teamMember'
import { review } from './review'
import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'title', 
        maxLength: 96,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Branding',                   value: 'branding' },
          { title: 'Publicidad Creativa',         value: 'publicidad-creativa' },
          { title: 'Marketing Digital',           value: 'marketing-digital' },
          { title: 'Investigación de Mercados',   value: 'investigacion-de-mercados' },
          { title: 'Producción Audiovisual',      value: 'produccion-audiovisual' },
          { title: 'Casos de Éxito WeProm',       value: 'casos-de-exito' },
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subcategory',
      title: 'Sub-etiqueta',
      type: 'string',
      description: 'Elige la sub-etiqueta que corresponda a la categoría seleccionada arriba.',
      hidden: ({ document }) => !document?.category,
      options: {
        list: [
          // ── Branding ──────────────────────────────────────
          { title: '🎨 Branding · Identidad Visual',          value: 'identidad-visual' },
          { title: '🔄 Branding · Rebranding',                value: 'rebranding' },
          { title: '🏢 Branding · Historias de Marcas',       value: 'historias-de-marcas' },
          { title: '📦 Branding · Packaging',                 value: 'packaging' },
          // ── Publicidad Creativa ───────────────────────────
          { title: '🏆 Publicidad · Campañas Famosas',        value: 'campanas-famosas' },
          { title: '🎄 Publicidad · Campañas de Temporada',   value: 'campanas-de-temporada' },
          { title: '💡 Publicidad · Tipos de Creatividad',    value: 'tipos-de-creatividad' },
          { title: '⚙️ Publicidad · Proceso Creativo',        value: 'proceso-creativo' },
          // ── Marketing Digital ─────────────────────────────
          { title: '📱 Mkt Digital · Publicidad Digital',     value: 'publicidad-digital' },
          { title: '📝 Mkt Digital · Contenido',              value: 'contenido' },
          { title: '💬 Mkt Digital · Redes Sociales',         value: 'redes-sociales' },
          { title: '🤖 Mkt Digital · Tecnología & IA',        value: 'tecnologia-ia' },
          // ── Investigación de Mercados ─────────────────────
          { title: '📊 Investigación · Metodología',          value: 'metodologia' },
          { title: '🛠️ Investigación · Herramientas & Modelos', value: 'herramientas-modelos' },
          { title: '👥 Investigación · Estrategia de Marca',  value: 'estrategia-de-marca' },
          // ── Producción Audiovisual ────────────────────────
          { title: '🎬 Audiovisual · Video Marketing',        value: 'video-marketing' },
          { title: '📖 Audiovisual · Storytelling',           value: 'storytelling' },
          { title: '🎭 Audiovisual · Marketing & Entretenimiento', value: 'marketing-entretenimiento' },
          // ── Casos de Éxito WeProm ─────────────────────────
          { title: '✅ Casos WeProm · Campañas Digitales',    value: 'caso-campanas-digitales' },
          { title: '✅ Casos WeProm · Branding',              value: 'caso-branding' },
          { title: '✅ Casos WeProm · Investigación de Mercados', value: 'caso-investigacion' },
          { title: '✅ Casos WeProm · Producción Audiovisual', value: 'caso-audiovisual' },
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'WeProm Team',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (ej. "5 min read")',
      type: 'string',
      initialValue: '5 min read'
    }),
    defineField({
      name: 'image',
      title: 'Hero Image (Gradient CSS o URL)',
      type: 'string',
      description: 'Ejemplo: linear-gradient(135deg,#1a0533 0%,#6b21a8 100%) o https://ejemplo.com/imagen.jpg',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Título que aparece en Google y en la pestaña del navegador. Si se deja vacío se usa el título del post. Máx. 60 caracteres.',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Descripción que aparece en los resultados de Google (snippet). Máx. 160 caracteres. Incluye la palabra clave principal.',
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              defineField({
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule => Rule.required()
                  })
                ]
              })
            ]
          }
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text'
            }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date'
    }
  }
})

export const schemaTypes = [post, ourProject, successStory, mktDigitalProject, marketResearchProject, portfolioCase, teamMember, review]