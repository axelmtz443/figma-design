import { defineType, defineField } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Reseñas',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Orden', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'rating',
      title: 'Calificación (1 a 5 estrellas)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).integer(),
      options: { list: [1, 2, 3, 4, 5] },
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Comentario de la reseña',
      type: 'text',
      rows: 3,
      description: 'Texto de la reseña (no listado explícitamente por el cliente, pero necesario para que la tarjeta muestre el comentario).',
    }),
    defineField({
      name: 'category',
      title: 'Categoría (página donde aparece)',
      type: 'string',
      description: 'Ej: "Home" para que solo aparezca en las reseñas de la página de inicio.',
      options: {
        list: [
          { title: 'Home', value: 'Home' },
          { title: 'Marketing Digital', value: 'Marketing Digital' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Producción Audiovisual', value: 'Producción Audiovisual' },
          { title: 'Investigación de Mercados', value: 'Investigación de Mercados' },
          { title: 'Consultoría', value: 'Consultoría' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'photo' },
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
