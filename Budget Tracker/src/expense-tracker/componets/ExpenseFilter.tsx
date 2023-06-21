import categories from "../catergory";
interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	const displayCatergoryDrop = categories.map((catergory) => (
		<option key={catergory} value={catergory}>
			{catergory}
		</option>
	));
	return (
		<>
			<div className="dropdown-menu d-block position-static shadow  w-280px">
				<div className="dropdown-item gap-2 py-2">
					<select
						className="form-select"
						onChange={(event) => onSelectCategory(event.target.value)}
					>
						<option value=""> All Categories</option>

						{displayCatergoryDrop}
					</select>
				</div>
			</div>
		</>
	);
};

export default ExpenseFilter;
