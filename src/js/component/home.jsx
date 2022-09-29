import React, {useContext, useState} from "react";
import Example from './example';
import Clock from "./clock";
import Counter from "./counter";
import MouseTracker from "./mousetracker";
import { ThemeContext, themes } from "./theme-context";
import ToggleButton from "./toggle-button";

const Home = () => {

	const handleTheme = () => {
		setState(state => ({
			theme:
			  state.theme === themes.dark ? themes.light : themes.dark
		}));		
	}

	const [state, setState] = useState(
		{
			theme: themes.light,
			toggleTheme: handleTheme
		}
	);

	return (
		<ThemeContext.Provider value={state}>
			<div className="container">
			<div className="row">
				<div className="col-12 d-flex mt-5 justify-content-center">
					<Example
					name= 'Mau Light'
					url= <a className='float-end' href='https://www.screenwriters.quest'>website</a>
					/>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<Clock time= {new Date().toLocaleTimeString()} />
				</div>
				<div className="col-12 d-flex justify-content-center">
					<Counter />
				</div>
				<div className="col-12 d-flex justify-content-center mt-3">
					<ToggleButton />
				</div>
				<div className="col-12">
					<MouseTracker />
				</div>
			</div>
		</div>
		</ThemeContext.Provider>
		
	);
};

export default Home;
