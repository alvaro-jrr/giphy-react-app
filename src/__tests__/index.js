import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders without crashing", async () => {
	const { findByText } = render(<App />);
	const title = await findByText(/Tendencias/i);
	expect(title).toBeInTheDocument();
});

test("search form could be used", async () => {
	render(<App />);
	const input = await screen.findByRole("textbox");
	fireEvent.change(input, { target: { value: "Matrix" } });

	const button = await screen.findByRole("button");
	fireEvent.click(button);

	/*const title = await screen.findByText("Matrix");
	expect(title).toBeVisible();*/
});
