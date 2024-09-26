import {defineField} from 'sanity';

const externalLink = defineField({
	title: 'External Link',
	name: 'externalLink',
	type: 'object',
	fields: [
		{
			name: 'url',
			type: 'string',
			title: 'URL',
			description: 'Paste the URL of the external web page (e.g. www.google.com)',
		}
	]
});

export default externalLink;
