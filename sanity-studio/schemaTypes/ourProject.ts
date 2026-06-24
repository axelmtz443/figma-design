import { defineType, defineField } from 'sanity'

export const ourProject = defineType({
  name: 'ourProject',
  title: 'Casos de Éxito (Home)',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Orden', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'client', title: 'Cliente', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'tag', title: 'Etiqueta de servicio', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3, validation: Rule => Rule.required() }),
    defineField({
      name: 'image',
      title: 'Imagen de fondo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo del cliente',
      type: 'image',
      options: { hotspot: false },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Color de acento (RGB)',
      type: 'string',
      description: 'Valores RGB separados por coma. Ej: "197,54,46" para rojo weprom',
      options: {
        list: [
          { title: 'Rojo WeProm   #c5362e', value: '197,54,46' },
          { title: 'Azul WeProm   #599ddf', value: '89,157,223' },
          { title: 'Verde WeProm  #80b67d', value: '128,182,125' },
          { title: 'Amarillo WeProm #e6af41', value: '230,175,65' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'tag', media: 'image' },
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
