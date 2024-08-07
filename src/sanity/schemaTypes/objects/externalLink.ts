import {defineField} from 'sanity';

const externalLink = defineField({
	title: 'External Link',
	name: 'externalLink',
	type: 'object',
	hidden: true,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			description: 'Add external link'
		}
	]
});

export default externalLink;
