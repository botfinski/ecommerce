import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

interface Props {}

const Logo: React.FC<Props> = () => {
	return (
		<Link href="/">
			<Typography variant="logo">Ecommerce</Typography>
		</Link>
	);
};

export default Logo;
