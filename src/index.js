import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// create a new component and this component should
//produce some html

const API_KEY = 'AIzaSyBO8AkKl_DkFXCwAg9ABAzCvoCSVy84Dec';

const App = () => {
  return (<div>
    <SearchBar />
    
  </div>)
}
//take this component's
//generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));