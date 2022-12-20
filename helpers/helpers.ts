export const createImgUrl = (slug: string, colors: string[]) => {
	return `${slug}-${colors[0].toLowerCase()}`;
};
