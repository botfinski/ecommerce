import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import PageTitle from "../components/PageTitle/PageTitle";
import { content } from "../mockData/content";

export default function Page404() {
	const {
		404: { title },
	} = content;

	return (
		<>
			<PageTitle pageTitle={title} />
			<Box sx={{ mt: 10, mb: 10 }}>
				<Container maxWidth="xl">
					<Typography>
						This page could not be found.
						<br />
						Return to <Link href="/">Home</Link>
					</Typography>
				</Container>
			</Box>
		</>
	);
}
