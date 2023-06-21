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
		<select
			className="form-select"
			onChange={(event) => onSelectCategory(event.target.value)}
		>
			<option value=""> All Categories</option>
			{displayCatergoryDrop}
		</select>
	);
};

export default ExpenseFilter;
