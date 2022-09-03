export default {
	title: 'Home',
	name: 'home',
	type: 'document',
	__experimental_actions: [/* "create", "delete", */ 'update', 'publish'],

	fields: [
		{
			title: 'Brand Name',
			name: 'brand',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Sub Brand',
			name: 'sub_brand',
			type: 'string',
		},
		{
			title: 'Notice',
			name: 'notice',
			type: 'string',
		},

		{
			name: 'address',
			title: 'Contact Address',
			type: 'object',
			options: {
				collapsible: true,
				collapsed: true,
			},
			fields: [
				{
					title: 'Email',
					name: 'email',
					type: 'string',
				},
				{
					title: 'Phone',
					name: 'phone',
					type: 'string',
				},
				{
					title: 'Address',
					name: 'address',
					type: 'string',
				},
			],
		},
		{
			name: 'members',
			title: 'Members',
			type: 'array',
			of: [
				{
					name: 'mmeber',
					title: 'Member',
					type: 'object',
					fields: [
						{
							title: 'Name',
							name: 'name',
							type: 'string',
						},
						{
							title: 'Info',
							name: 'info',
							type: 'string',
						},
						{
							title: 'Position',
							name: 'position',
							type: 'string',
						},
						{
							title: 'Status',
							name: 'status',
							type: 'string',
						},
					],
				},
			],
		},
	],
}
