import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'brief',
      type: 'string',
      title: 'Brief Description of the featured category',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
  ],
})
