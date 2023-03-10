import { IProduct } from "../types/types";

export const productsData: IProduct[] = [
	{
		id: 1,
		name: "Wooden Table",
		slug: "wooden-table",
		price: 199.99,
		previousPrice: 299.99,
		colors: [
			{
				id: "wooden-table-000",
				name: "Gray",
				url: "wooden-table-gray",
			},
			{
				id: "wooden-table-001",
				name: "Blue",
				url: "wooden-table-blue",
			},
			{
				id: "wooden-table-002",
				name: "Yellow",
				url: "wooden-table-yellow",
			},
		],
		quantity: 10,
		rating: 4.5,
		shortDescription: "Solid wooden table.",
		longDescription:
			"This solid wooden table is the perfect addition to your living room. It is made from high quality wood and is sure to last for years.",
		reviews: [
			"This table looks great and is very sturdy!",
			"The legs are a bit wobbly but it serves its purpose.",
		],
		details: [
			"Made of solid wood",
			"Dimensions: W: 80 cm x L: 120 cm x H: 40 cm",
			"Easy to assemble",
		],
		// photos: [
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// ],
	},
	{
		id: 2,
		name: "Leather Sofa",
		slug: "leather-sofa",
		price: 599.99,
		previousPrice: 699.99,
		colors: [
			{
				id: "leather-sofa-000",
				name: "Beige",
				url: "leather-sofa-beige",
			},
			{
				id: "leather-sofa-001",
				name: "Blue",
				url: "leather-sofa-blue",
			},
			{
				id: "leather-sofa-002",
				name: "Yellow",
				url: "leather-sofa-yellow",
			},
		],
		quantity: 8,
		rating: 4.2,
		shortDescription: "Beautiful leather sofa.",
		longDescription:
			"This leather sofa is a great addition to your living room. It is made from high quality leather and is sure to last for years.",
		reviews: [
			"This sofa looks great and is very comfortable!",
			"The cushions are a bit hard but it looks great.",
		],
		details: [
			"Made of leather",
			"Dimensions: W: 180 cm x L: 120 cm x H: 70 cm",
			"Easy to assemble",
		],
		// photos: [
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// ],
	},
	{
		id: 3,
		name: "Recliner Chair",
		slug: "recliner-chair",
		price: 179.99,
		previousPrice: 0,
		colors: [
			{
				id: "recliner-chair-000",
				name: "Green",
				url: "recliner-chair-green",
			},
			{
				id: "recliner-chair-001",
				name: "Blue",
				url: "recliner-chair-blue",
			},
			{
				id: "recliner-chair-002",
				name: "Brown",
				url: "recliner-chair-brown",
			},
			{
				id: "recliner-chair-003",
				name: "Orange",
				url: "recliner-chair-orange",
			},
			{
				id: "recliner-chair-004",
				name: "Red",
				url: "recliner-chair-red",
			},
		],
		quantity: 5,
		rating: 4.9,
		shortDescription: "Comfortable recliner chair.",
		longDescription:
			"This recliner chair is perfect for relaxing after a long day. It is made from high quality materials and is sure to last for years.",
		reviews: [
			"This chair is very comfortable and looks great!",
			"The arms are a bit wobbly but it is perfect for reading.",
		],
		details: [
			"Made of high quality materials",
			"Dimensions: W: 90 cm x L: 80 cm x H: 110 cm",
			"Easy to assemble",
		],
		// photos: [
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// 	"https://picsum.photos/500/500",
		// ],
	},
	// {
	// 	id: 4,
	// 	name: "Coffee Table",
	// 	slug: "coffee-table",
	// 	price: 299.99,
	// 	previousPrice: 399.99,
	// 	colors: ["brown", "black", "white"],
	// 	quantity: 12,
	// 	rating: 4.7,
	// 	shortDescription: "Elegant coffee table.",
	// 	longDescription:
	// 		"This coffee table is perfect for any living room. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This table looks great and is very sturdy!",
	// 		"The glass top is a bit thin but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 90 cm x L: 140 cm x H: 40 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 5,
	// 	name: "TV Stand",
	// 	slug: "tv-stand",
	// 	price: 149.99,
	// 	previousPrice: 199.99,
	// 	colors: ["black", "brown", "white"],
	// 	quantity: 6,
	// 	rating: 4.3,
	// 	shortDescription: "Modern TV stand.",
	// 	longDescription:
	// 		"This modern TV stand is perfect for any living room. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This stand looks great and is very sturdy!",
	// 		"The drawers are a bit flimsy but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 120 cm x L: 80 cm x H: 40 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 6,
	// 	name: "Dining Table",
	// 	slug: "dining-table",
	// 	price: 499.99,
	// 	previousPrice: 0,
	// 	colors: ["brown", "black", "white"],
	// 	quantity: 5,
	// 	rating: 4.8,
	// 	shortDescription: "Stylish dining table.",
	// 	longDescription:
	// 		"This stylish dining table is perfect for any dining room. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This table looks great and is very sturdy!",
	// 		"The legs are a bit wobbly but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 150 cm x L: 90 cm x H: 75 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 7,
	// 	name: "Desk",
	// 	slug: "desk",
	// 	price: 149.99,
	// 	previousPrice: 199.99,
	// 	colors: ["brown", "black", "white"],
	// 	quantity: 8,
	// 	rating: 4.1,
	// 	shortDescription: "Modern desk.",
	// 	longDescription:
	// 		"This modern desk is perfect for any office. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This desk looks great and is very sturdy!",
	// 		"The drawers are a bit flimsy but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 120 cm x L: 80 cm x H: 80 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 8,
	// 	name: "Bookshelf",
	// 	slug: "bookshelf",
	// 	price: 249.99,
	// 	previousPrice: 0,
	// 	colors: ["brown", "black", "white"],
	// 	quantity: 10,
	// 	rating: 4.5,
	// 	shortDescription: "Sturdy bookshelf.",
	// 	longDescription:
	// 		"This sturdy bookshelf is perfect for any living room. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This bookshelf looks great and is very sturdy!",
	// 		"The shelves are a bit thin but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 90 cm x L: 120 cm x H: 180 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 9,
	// 	name: "Ottoman",
	// 	slug: "ottoman",
	// 	price: 99.99,
	// 	previousPrice: 149.99,
	// 	colors: ["brown", "black", "Grey"],
	// 	quantity: 6,
	// 	rating: 4.7,
	// 	shortDescription: "Comfortable ottoman.",
	// 	longDescription:
	// 		"This comfortable ottoman is perfect for any living room. It is made from high quality materials and is sure to last for years.",
	// 	reviews: [
	// 		"This ottoman looks great and is very comfortable!",
	// 		"The cushions are a bit hard but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality materials",
	// 		"Dimensions: W: 70 cm x L: 70 cm x H: 40 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 10,
	// 	name: "Rug",
	// 	slug: "rug",
	// 	price: 79.99,
	// 	previousPrice: 0,
	// 	colors: ["brown", "Red", "Grey"],
	// 	quantity: 9,
	// 	rating: 4.2,
	// 	shortDescription: "Stylish rug.",
	// 	longDescription:
	// 		"This stylish rug is perfect for any living room. It is made from high quality materials and is sure to last for years.",
	// 	reviews: [
	// 		"This rug looks great and is very comfortable!",
	// 		"The colors are a bit dull but it looks great.",
	// 	],
	// 	details: [
	// 		"Made of high quality materials",
	// 		"Dimensions: W: 160 cm x L: 200 cm",
	// 		"Easy to clean",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 11,
	// 	name: "Mirror",
	// 	slug: "mirror",
	// 	price: 99.99,
	// 	previousPrice: 0,
	// 	colors: ["black", "Silver", "Gold"],
	// 	quantity: 4,
	// 	rating: 4.9,
	// 	shortDescription: "Elegant mirror.",
	// 	longDescription:
	// 		"This elegant mirror is perfect for any living room. It is made from high quality materials and is sure to last for years.",
	// 	reviews: [
	// 		"This mirror looks great and is very sturdy!",
	// 		"The frame is a bit flimsy but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality materials",
	// 		"Dimensions: W: 80 cm x L: 80 cm",
	// 		"Easy to clean",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
	// {
	// 	id: 12,
	// 	name: "Cabinet",
	// 	slug: "cabinet",
	// 	price: 199.99,
	// 	previousPrice: 0,
	// 	colors: ["brown", "black", "white"],
	// 	quantity: 5,
	// 	rating: 4.5,
	// 	shortDescription: "Sturdy cabinet.",
	// 	longDescription:
	// 		"This sturdy cabinet is perfect for any living room. It is made from high quality wood and is sure to last for years.",
	// 	reviews: [
	// 		"This cabinet looks great and is very sturdy!",
	// 		"The doors are a bit flimsy but it serves its purpose.",
	// 	],
	// 	details: [
	// 		"Made of high quality wood",
	// 		"Dimensions: W: 80 cm x L: 120 cm x H: 180 cm",
	// 		"Easy to assemble",
	// 	],
	// 	photos: [
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 		"https://picsum.photos/500/500",
	// 	],
	// },
];
