import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";
import ErrorPage from "pages/Error";
import { GifsContextProvider } from "./context/GifsContext";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<h1 className="App-title">Giphy App</h1>
				</Link>
			</header>

			<main className="App-main">
				{/*
					Todas las rutas, que están envueltas con
					GifsContextProvider tendrán acceso al contexto
					que se haya establecido en GifsContextProvider
				*/}

				<GifsContextProvider>
					<Route path="/" component={Home} />
					<Route path="/search/:keyword" component={SearchResults} />
					<Route path="/details/:id" component={Details} />
					<Route path="/404" component={ErrorPage} />
				</GifsContextProvider>
			</main>
		</div>
	);
};

export default App;
