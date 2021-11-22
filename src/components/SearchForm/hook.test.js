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
	expect(result.current.times).toBe(2);
});

test("should change rating", () => {
	const { result } = setup();

	act(() => result.current.updateRating("pg-13"));

	expect(result.current.rating).toBe("pg-13");
});

test("should not update times when updated rating", () => {
	const { result } = setup();

	act(() => {
		result.current.updateRating("g");
		result.current.updateRating("pg");
	});

	expect(result.current.rating).toBe("pg");
	expect(result.current.times).toBe(0);
});

test("should change language", () => {
	const { result } = setup();

	act(() => result.current.updateLanguage("es"));

	expect(result.current.language).toBe("es");
});
