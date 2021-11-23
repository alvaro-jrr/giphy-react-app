import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params));

test("should use initial value", () => {
	const { result } = setup({
		initialKeyword: "Batman",
		initialRating: "pg-13",
		initialLanguage: "pt",
	});

	expect(result.current.keyword).toBe("Batman");
	expect(result.current.rating).toBe("pg-13");
	expect(result.current.language).toBe("pt");
});

test("should change keyword", () => {
	const { result } = setup();

	act(() => result.current.updateKeyword("batman"));

	expect(result.current.keyword).toBe("batman");
});

test("should update correctly when used twice", () => {
	const { result } = setup();

	act(() => {
		result.current.updateKeyword("real");
		result.current.updateKeyword("madrid");
	});

	expect(result.current.keyword).toBe("madrid");
});

test("should change rating", () => {
	const { result } = setup();

	act(() => result.current.updateRating("pg-13"));

	expect(result.current.rating).toBe("pg-13");
});

test("should change language", () => {
	const { result } = setup();

	act(() => result.current.updateLanguage("es"));

	expect(result.current.language).toBe("es");
});

test("should reset filters", () => {
	const { result } = setup();

	act(() => {
		result.current.updateRating("pg-13");
		result.current.updateLanguage("es");
	});

	expect(result.current.rating).toBe("pg-13");
	expect(result.current.language).toBe("es");

	act(() => result.current.resetFilters());

	expect(result.current.rating).toBe("g");
	expect(result.current.language).toBe("en");
});
