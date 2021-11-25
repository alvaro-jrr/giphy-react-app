import { Route, Switch } from "wouter";
import Header from "components/Header";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import Home from "pages/Home";
import Details from "pages/Details";
import SearchResults from "pages/SearchResults";
import ErrorPage from "pages/Error";
import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "context/GifsContext";
import "App.css";

const App = () => {
	return (
		<UserContextProvider>
			<div className="App">
				<Header />

				<main className="App-main">
					{/*
						Todas las rutas, que están envueltas con
						GifsContextProvider tendrán acceso al contexto
						que se haya establecido en GifsContextProvider
					*/}

					<GifsContextProvider>
						<Switch>
							<Route path="/" component={Home} />
							<Route path="/login" component={LoginPage} />
							<Route path="/register" component={RegisterPage} />
							<Route
								path="/search/:keyword/:rating?/:language?"
								component={SearchResults}
							/>
							<Route path="/details/:id" component={Details} />
							<Route path="/:rest*" component={ErrorPage} />
						</Switch>
					</GifsContextProvider>
				</main>
			</div>
		</UserContextProvider>
	);
};

export default App;
