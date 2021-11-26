import { useState, useEffect, useRef } from "react";

// Hook que determina cuando un componente debe renderizarse
const useNearScreen = ({
	distance = "100px",
	observeOnce = true,
	onlyCheckViewport = false,
} = {}) => {
	const [isNearScreen, setShow] = useState(false);

	// Referencia al elemento a observar
	const fromRef = useRef();

	useEffect(() => {
		let observer;

		const onChange = (entries) => {
			// Obtiene la informacion del observer
			const element = entries[0];

			// Si el elemento se esta interceptando, show = true
			if (element.isIntersecting) {
				setShow(true);
				observeOnce && observer.disconnect();
			} else if (!element.isIntersecting && onlyCheckViewport) {
				setShow(false);
				observeOnce && observer.disconnect();
			} else {
				setShow(false);
			}
		};

		// Verificar soporte de IntersectionObserver
		Promise.resolve(
			typeof IntersectionObserver !== "undefined"
				? IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			/*
				IntersectionObserver recibe dos parametros,
				la funcion callback y un objeto de opciones
			*/

			observer = new IntersectionObserver(onChange, {
				rootMargin: distance,
			});

			// Si el elemento observado es diferente a null, es observado
			if (fromRef.current !== null) observer.observe(fromRef.current);
		});

		// Cuando finaliza la ejecucion, desconecta el observador
		return () => observer && observer.disconnect();
	});

	// Retorna el valor de isNearScreen y la referencia
	return { isNearScreen, fromRef };
};

export default useNearScreen;
