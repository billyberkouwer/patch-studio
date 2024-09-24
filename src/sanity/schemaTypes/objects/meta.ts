import {defineType} from 'sanity'

const Meta = defineType({
  type: 'object',
  name: 'meta',
  title: 'Meta',
  fields: [
    {
      type: 'string',
      title: 'Title',
      name: 'title',
      group: ['meta'],
    },
    {
      type: 'text',
      name: 'description',
      title: 'Describe This Site',
      group: ['meta'],
    },
    {
      type: 'string',
      name: 'keywords',
      title: 'Keywords',
      description: 'A comma separated list of keywords, to be used in the keywords meta field. This is unlikely to be crawled by search engines but may still be worth including.',
      group: ['meta'],
    },
  ],
});

export default Meta
