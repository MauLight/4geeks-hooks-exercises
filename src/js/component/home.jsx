import React, {useContext} from "react";
import Example from './example';
import Clock from "./clock";
import Counter from "./counter";
import MouseTracker from "./mousetracker";


const themes = {
	light: {
	  foreground: "#000000",
	  background: "#eeeeee"
	},
	dark: {
	  foreground: "#ffffff",
	  background: "#222222",
	}
  };

const ThemeContext = React.createContext(themes.light);

const Home = () => {
	return (
		<ThemeContext.Provider value={themes.dark}>
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
				<div className="col-12">
					<Toolbar />
				</div>
				<div className="col-12">
					<MouseTracker />
				</div>
			</div>
		</div>
		</ThemeContext.Provider>
		
	);
};


const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedButton = () => {
    const theme= useContext(ThemeContext);
    return (
        <button className='btn d-block mx-auto mt-2' style={{background: theme.background, color: theme.foreground}}>
            I'm stylized with context!
        </button>
    )
};

export default Home;
