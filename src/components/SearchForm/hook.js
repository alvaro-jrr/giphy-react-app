import { useReducer } from "react";

const ACTIONS = {
	UPDATE_KEYWORD: "update_keyword",
	UPDATE_RATING: "update_rating",
	UPDATE_LANGUAGE: "update_language",
};

const ACTIONS_REDUCERS = {
	[ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
		...state,
		keyword: action.payload,
		times: state.times + 1,
	}),
	[ACTIONS.UPDATE_RATING]: (state, action) => ({
		...state,
		rating: action.payload,
	}),
	[ACTIONS.UPDATE_LANGUAGE]: (state, action) => ({
		...state,
		language: action.payload,
	}),
};

const REDUCER = (state, action) => {
	const actionReducer = ACTIONS_REDUCERS[action.type];

	return actionReducer ? actionReducer(state, action) : state;
};

const useForm = ({
	initialKeyword = "",
	initialRating = "g",
	initialLanguage = "en",
} = {}) => {
	/*
		useReducer recibe dos argumentos, el reducer e
		initialState donde se indica el estado inicial.

		useReducer retorna un array de dos posiciones,
		siendo state el estado y dispatch la funcion
		que actualiza el estado.
	*/

	const [state, dispatch] = useReducer(REDUCER, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
		language: initialLanguage,
		times: 0,
	});

	const { keyword, rating, times, language } = state;

	return {
		keyword,
		rating,
		times,
		language,
		updateKeyword: (keyword) =>
			dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
		updateRating: (rating) =>
			dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
		updateLanguage: (language) =>
			dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language }),
	};
};

export default useForm;
