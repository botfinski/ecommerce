export enum UserRoles {
	CLIENT = "client",
	ADMIN = "admin",
}

export type User = {
	id: number;
	name: string;
	role: UserRoles;
	orders?: number[];
};

export interface IProduct {
	id: number;
	name: string;
	slug: string;
	price: number;
	previousPrice: number;
	colors: { id: string; name: string; url: string }[];
	quantity: number;
	rating: number;
	shortDescription: string;
	longDescription: string;
	reviews: string[];
	details: string[];
	// photos: string[];
}

export interface ICartItem {
	id: number;
	name: string;
	price: number;
	selectedColorId: string;
}
