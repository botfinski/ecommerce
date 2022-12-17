import React from "react";

interface Props {}

const Sorting: React.FC<Props> = () => {
	return (
		<div>
			<label htmlFor="productsPerPage">Products per page:</label>
			<select name="productsPerPage" id="productsPerPage">
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="100">100</option>
			</select>

			<label htmlFor="sortBy">Sort by:</label>
			<select name="sortBy" id="sortBy">
				<option value="name">name</option>
				<option value="price">price</option>
				<option value="rating">rating</option>
			</select>
		</div>
	);
};

export default Sorting;
