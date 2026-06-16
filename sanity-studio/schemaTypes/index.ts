/* export const schemaTypes = [] */


// sanity-studio/schemaTypes/index.ts

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
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'DeFi', value: 'DeFi' },
          { title: 'DAOs', value: 'DAOs' },
          { title: 'Smart Contracts', value: 'Smart Contracts' },
          { title: 'dApps', value: 'dApps' },
          { title: 'UX', value: 'UX' },
          { title: 'Security', value: 'Security' },
          { title: 'Web3', value: 'Web3' },
          { title: 'Tools', value: 'Tools' },
          { title: 'Multi-Chain', value: 'Multi-Chain' },
          { title: 'Marketing', value: 'Marketing' }
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

export const schemaTypes = [post]