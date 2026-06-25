import { defineType, defineField } from 'sanity'

export const marketResearchProject = defineType({
  name: 'marketResearchProject',
  title: 'Proyectos Investigación de Mercados',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Orden', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'client', title: 'Nombre del cliente', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'objetivos', title: 'Objetivos', type: 'text', rows: 4, validation: Rule => Rule.required() }),
    defineField({
      name: 'resultados',
      title: 'Resultados obtenidos',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({ name: 'image', title: 'Imagen de fondo', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo del cliente', type: 'image', options: { hotspot: false } }),
  ],
  preview: {
    select: { title: 'client', media: 'image' },
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
