import {defineType} from 'sanity'

export default defineType({
  name: 'Dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the Dish',
      validation: (rule) => rule.required(),
    },
    {
      name: 'brief',
      type: 'string',
      title: 'Brief Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the Dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
  ],
})
