let initialState = [];
if (localStorage.getItem('allEvents')) {
  initialState = JSON.parse(localStorage.getItem('allEvents'));
}

const eventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      let id = state.length + 1;
      action.payload.id = id;
      // add it to the local storage as well
      localStorage.setItem(
        'eventList',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];

    case 'RESET_EVENT_LIST':
      localStorage.setItem('eventList', JSON.stringify(initialState));
      return initialState;

    default:
      return state;
  }
};

export default eventListReducer;
