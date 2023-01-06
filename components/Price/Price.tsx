import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

interface Props {
	previousPrice: number;
	price: number;
	justify?: string;
}

interface WrapperProps {
	justify?: string;
}

const PriceWrapper = styled(Box)<WrapperProps>`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : "start")};
	gap: 10px;
	margin-bottom: 1rem;
	& > p {
		font-size: 2rem;
	}
`;

const Price: React.FC<Props> = ({ previousPrice, price, justify }) => {
	return previousPrice > 0 ? (
		<PriceWrapper justify={justify}>
			<Typography sx={{ color: "custom.pink", textDecoration: "line-through" }}>
				{`$ ${previousPrice}`}
			</Typography>{" "}
			<Typography>{`$ ${price}`}</Typography>
		</PriceWrapper>
	) : (
		<PriceWrapper justify={justify}>
			<Typography>{`$ ${price}`}</Typography>
		</PriceWrapper>
	);
};

export default Price;
