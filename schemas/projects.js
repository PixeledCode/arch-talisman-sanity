export default {
	title: 'Projects',
	name: 'projects',
	type: 'document',

	fields: [
		{
			title: 'Project Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'main_image',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				},
			],
		},

		{
			name: 'image_gallery',
			title: 'Images gallery',
			type: 'array',
			of: [{ type: 'image' }],
		},
		{
			title: 'Layout Position',
			name: 'position',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
}
