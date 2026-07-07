import { defineType, defineField } from 'sanity'

export const mktDigitalProject = defineType({
  name: 'mktDigitalProject',
  title: 'Proyectos MKT Digital',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Orden', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'name', title: 'Nombre del cliente', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'subname', title: 'Subnombre (ej: Studio, Eurostern)', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: false }, validation: Rule => Rule.required() }),
    defineField({ name: 'cardImg', title: 'Imagen de tarjeta', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: 'traffic', title: 'Tráfico total', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'accounts', title: 'Alcance', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'conversations', title: 'Conversiones', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'metricLabel',
      title: 'Título del número principal',
      type: 'string',
      description: 'Etiqueta que aparece arriba del número grande de la tarjeta (muestra el valor de "Conversiones"). Ej: Citas Agendadas, Pruebas de Manejo, Compras en Línea.',
      initialValue: 'Conversaciones',
    }),
    defineField({ name: 'interactions', title: 'Interacciones', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'platforms',
      title: 'Plataformas de campaña',
      description: 'Selecciona una o más plataformas usadas en esta campaña. Sus íconos se muestran en la tarjeta.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Meta', value: 'meta' },
          { title: 'Google', value: 'google' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
      },
      validation: Rule => Rule.min(1).error('Selecciona al menos una plataforma'),
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
          { title: 'Azul claro #3b82f6', value: '#3b82f6' },
          { title: 'Ámbar #f59e0b', value: '#f59e0b' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'traffic', media: 'cardImg' },
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
