
const FETCH_DATA = 'FETCH_DATA';
const SET_DATA = 'SET_DATA';
const CHANGE_COLOR = 'CHANGE_COLOR';
const initialState = { users: [], color: 'black' };

export const actionCreators = {
  fetchData: () => (dispatch, getState) => {
    dispatch({ type: FETCH_DATA });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>{
            // const user = new User(document.getElementById('userData'));
            // user.render(json);
            dispatch({ type: SET_DATA, users: json });
        })
  },

  setColor: (color) => (dispatch, getState) => {
    dispatch({ type: CHANGE_COLOR, color: color });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case FETCH_DATA: {
        return {
            users: state.users,
            color:state.color
        }
    }

    case SET_DATA: {
        return {
            users: action.users,
            color:state.color
        }
    }

    case CHANGE_COLOR: {
        return {
            users: state.users,
            color:action.color
        }
    }
}
  return state;
};
