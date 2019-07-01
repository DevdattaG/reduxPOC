/**
 * The entry point
 */

import User from './components/app/user';
import store from "./reduxModules/store";

//const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

window.addEventListener('getAll', () => {
  fetchData();
});

window.addEventListener('changeTheme', (color) => {
  setTheme(color);
});

function fetchData(){
  store.dispatch({ type: 'FETCH_DATA' });
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    store.dispatch({type:'SET_DATA', users: json})
    const user = new User(document.getElementById('userData'));
    user.render();
  })
}

function setTheme(color){
  var records = document.getElementsByClassName('record');
  store.dispatch({ type: 'CHANGE_COLOR', color: color.detail });

  for(var i=0, len=records.length; i<len; i++)
  {
    records[i].style.border = `1px solid ${store.getState().appEngine.color}`;
  }
}