import { createContext, useState } from "react";

interface IContextProps {
	items: CartItems[];
	totalPrice: number;
	addToCart: (id: number, price: number, selectedColorId: string) => void;
}

interface Props {
	children: React.ReactNode;
}

export const CartContext = createContext({} as IContextProps);
// export const CartContext = createContext<any>({});

export interface CartItems {
	id: number;
	price: number;
	selectedColorId: string;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
	const [items, setItems] = useState<CartItems[] | []>([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (id: any, price: any, selectedColorId: any) => {
		setItems(prev => [
			...prev,
			{
				id,
				price,
				selectedColorId,
			},
		]);

		setTotalPrice(prev => +(prev + price).toFixed(2));
	};

	return (
		<CartContext.Provider value={{ items, totalPrice, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
