import { createContext, useState } from "react";

interface IContextProps {
	items: CartItems[];
	totalPrice: number;
	addToCart: (
		id: number,
		name: string,
		price: number,
		selectedColorId: string,
		selectedColorName: string
	) => void;
}

interface Props {
	children: React.ReactNode;
}

export const CartContext = createContext({} as IContextProps);
// export const CartContext = createContext<any>({});

export interface CartItems {
	id: number;
	name: string;
	price: number;
	selectedColorId: string;
	selectedColorName: string;
	amount: number;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
	const [items, setItems] = useState<CartItems[] | []>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const addToCart = (
		id: number,
		name: string,
		price: number,
		selectedColorId: string,
		selectedColorName: string
	) => {
		const itemInCart = items.find(o => o.selectedColorId === selectedColorId);

		if (itemInCart) {
			setItems(prev =>
				prev.map(item =>
					item.selectedColorName === selectedColorName
						? { ...item, amount: item.amount + 1 }
						: item
				)
			);
		} else {
			setItems(prev => {
				return [
					...prev,
					{
						id,
						name,
						price,
						amount: 1,
						selectedColorId,
						selectedColorName,
					},
				];
			});
		}

		setTotalPrice(prev => +(prev + price).toFixed(2));
	};

	return (
		<CartContext.Provider value={{ items, totalPrice, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
