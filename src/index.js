import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAweoLQMSzsSmYrAiQbMEqN_SDU8sd_2Vc';

const App = () => {
	return (
		<div>
		 <SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));