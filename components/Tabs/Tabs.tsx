import React from "react";
import { Box, Typography, Tabs as MUITabs, Tab } from "@mui/material";
import { content } from "../../mockData/content";

interface TabPanelProps {
	value: number;
	index: number;
	children: React.ReactNode;
}

interface Props {
	longDescription: string;
	reviews: string[];
	details: string[];
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const Tabs: React.FC<Props> = ({ longDescription, reviews, details }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<MUITabs value={value} onChange={handleChange}>
					{content.productDetails.tabs.map((tab, i) => (
						<Tab
							key={tab.name}
							label={tab.name}
							{...a11yProps(i)}
							sx={{ textTransform: "capitalize" }}
						/>
					))}
				</MUITabs>
			</Box>
			{content.productDetails.tabs.map((tab, i) => (
				<TabPanel value={value} index={i} key={i}>
					{tab.id === "longDescription" && longDescription}
					{tab.id === "reviews" && (
						<ul>
							{reviews.map(review => (
								<li key={review}>
									<Typography>{review}</Typography>
								</li>
							))}
						</ul>
					)}
					{tab.id === "details" && (
						<ul>
							{details.map(detail => (
								<li key={detail}>
									<Typography>{detail}</Typography>
								</li>
							))}
						</ul>
					)}
				</TabPanel>
			))}
		</>
	);
};

export default Tabs;
