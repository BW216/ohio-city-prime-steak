var companyInfo = {
	title: 'OHIO CITY PRIME STEAK',
	phone: '(216) 555 - 6785',
	location: 'Cleveland, Ohio'
};

var specialMenuData = [
	{
		title: 'Filet Mignon',
		description: '16 oz. specialty bone-in cut.',
		price: '25'
	},

	{
		title: 'Ribeye',
		description: '16 oz. boneless cut is aged perfectly and hand selected.',
		price: '15'
	},

	{
		title: 'New York Strip',
		description: 'USDA prime 19 oz. bone-in cut.',
		price: '30'
	}
];

var randomQuoteData = [
	{
		author: 'Billy',
		quote:
			'Food, To Me, Is Always About Cooking And Eating With Those You Love And Care For.'
	},
	{
		author: 'Sally',
		quote:
			'Food, To Me, Is Always About Cooking And Eating With Those You Love And Care For.'
	},
	{
		author: 'Austin R',
		quote:
			'Food, To Me, Is Always About Cooking And Eating With Those You Love And Care For.'
	}
];

export const globalState = {
	count: 0,
	companyInfo: companyInfo,
	location: location,
	specialMenuData: specialMenuData,
	randomQuoteData: randomQuoteData,
	reviewStatus: {
		currentReview: 0
	}
};
