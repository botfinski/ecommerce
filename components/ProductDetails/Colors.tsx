import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";
import { Typography } from "@mui/material";

interface Props {
	colors: any;
}

const ColorList = styled("ul")`
	list-style: none;
	& > li:not(:last-of-type) {
		margin-bottom: 8px;
	}
	& > li > a {
		font-size: 1.5rem;
	}
`;

export const Colors: React.FC<Props> = ({ colors }) => {
	return (
		<>
			<ColorList>
				<Typography>Available colors:</Typography>
				{colors.map((color: any) => {
					return (
						<li>
							<Link href={color.url} key={color.id}>
								{color.name}
							</Link>
						</li>
					);
				})}
			</ColorList>
		</>
	);
};
