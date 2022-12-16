import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled, css } from "@mui/system";

interface Props {
	pageTitle: string;
}

const Wrapper = styled(Box)`
	height: 286px;
	display: flex;
	align-items: center;
	${props =>
		css`
			background-color: ${props.theme.palette.primary["50"]};
		`};
`;

const PageTitle: React.FC<Props> = ({ pageTitle }) => {
	return (
		<Wrapper>
			<Container maxWidth="xl">
				<Typography variant="h1">{pageTitle}</Typography>
			</Container>
		</Wrapper>
	);
};

export default PageTitle;
