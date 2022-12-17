import PageTitle from "../components/PageTitle/PageTitle";
import { content } from "../mockData/content";

export default function Home() {
	const {
		home: { title },
	} = content;

	return (
		<>
			<PageTitle pageTitle={title} />
		</>
	);
}
