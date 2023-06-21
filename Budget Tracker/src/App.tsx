import { useState } from "react";
import ExpenseList from "./expense-tracker/componets/ExpenseList";
import ExpenseFilter from "./expense-tracker/componets/ExpenseFilter";
import ExpenseForm from "./expense-tracker/componets/ExpenseForm";
import categories from "./expense-tracker/catergory";
function App() {
	const [selectedCategory, setSelectedCategory] = useState("");

	//default state
	const [expenses, setExpenes] = useState([
		{ id: 1, description: "Car Payment", amount: 500, category: "Important" },
		{ id: 2, description: "Rent", amount: 1000, category: "Important" },
		{ id: 3, description: "Popeyes", amount: 10, category: "Not Important" },
		{ id: 4, description: "New Mouse", amount: 70, category: "Not Important" },
		{
			id: 5,
			description: "Protien Shake",
			amount: 10,
			category: "Semi Important",
		},
	]);

	const visibileExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className="mb-5">
				{/* Expense Componet to take in expenses*/}
				<ExpenseForm
					onSubmit={(expense) =>
						setExpenes([
							...expenses,
							{
								...expense,
								id: expenses.length + 1,
							},
						])
					}
				></ExpenseForm>
			</div>
			<div className="mb-3">
				{/* Componet to filter data from the table*/}
				<ExpenseFilter
					onSelectCategory={(category) => setSelectedCategory(category)}
				></ExpenseFilter>
			</div>

			{/* Componet to populate the table with the data*/}
			<ExpenseList
				expenses={visibileExpenses}
				OnDelete={(id) => setExpenes(expenses.filter((e) => e.id !== id))}
			></ExpenseList>
		</div>
	);
}

export default App;
