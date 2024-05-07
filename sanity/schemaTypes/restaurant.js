import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'brief',
      type: 'string',
      title: 'Brief Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the Restaurant',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating between 1 to 5',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please Enter a value between 1 to 5'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'Dish'}]}],
    },
  ],
})
