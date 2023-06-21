import categories from "../catergory";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
	onSubmit: (data: ExpenseFormData) => void;
}

{
	/* Error handling using zod*/
}
const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description should be at least 3 Characters." })
		.max(100),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.min(0.01)
		.max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	{
		/* Function to map out catergories for each drop down */
	}
	const displayCatergoryDrop = categories.map((catergory) => (
		<option key={catergory} value={catergory}>
			{catergory}
		</option>
	));

	return (
		<>
			<form
				onSubmit={handleSubmit((data) => {
					onSubmit(data);
					reset();
				})}
			>
				{/* Description*/}
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						{...register("description")}
						id="description"
						type="text"
						className="form-control"
					/>
				</div>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}

				{/* Amount*/}
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount
					</label>
					<input
						{...register("amount", { valueAsNumber: true })}
						id="amount"
						type="number"
						className="form-control"
					/>
				</div>
				{errors.amount && (
					<p className="text-danger">{errors.amount?.message}</p>
				)}
				{/* Different categories*/}
				<div className="mb-3">
					<label htmlFor="categories" className="form-label">
						Categories
					</label>

					<select
						{...register("category")}
						id="categories"
						className="form-select"
					>
						<option value=""></option>
						{displayCatergoryDrop}
					</select>
				</div>
				{errors.category && (
					<p className="text-danger">{errors.category?.message}</p>
				)}
				<button className="btn btn-btn btn-secondary">Submit</button>
			</form>
		</>
	);
};

export default ExpenseForm;
