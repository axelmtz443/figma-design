import { defineType, defineField } from 'sanity'

export const successStory = defineType({
  name: 'successStory',
  title: 'Casos de Éxito (Branding)',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Orden', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'client', title: 'Cliente', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'service', title: 'Servicio', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 4, validation: Rule => Rule.required() }),
    defineField({
      name: 'logo',
      title: 'Logo del cliente',
      type: 'image',
      options: { hotspot: false },
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen portada',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'expandedImage1',
      title: 'Imagen expandida 1',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'expandedImage2',
      title: 'Imagen expandida 2',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'color',
      title: 'Color de acento',
      type: 'string',
      options: {
        list: [
          { title: 'Rojo WeProm   #c5362e', value: '#c5362e' },
          { title: 'Azul WeProm   #599ddf', value: '#599ddf' },
          { title: 'Verde WeProm  #80b67d', value: '#80b67d' },
          { title: 'Amarillo WeProm #e6af41', value: '#e6af41' },
          { title: 'Morado', value: '#8b5cf6' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gridSize',
      title: 'Tamaño en grid',
      type: 'string',
      options: {
        list: [
          { title: 'Normal (1×1)', value: 'md:col-span-1 md:row-span-1' },
          { title: 'Ancho (2×2)', value: 'md:col-span-2 md:row-span-2' },
          { title: 'Alto (1×2)', value: 'md:col-span-1 md:row-span-2' },
          { title: 'Full (4×3)', value: 'md:col-span-4 md:row-span-3' },
        ],
      },
      initialValue: 'md:col-span-1 md:row-span-1',
    }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'service', media: 'coverImage' },
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
