import { combineReducers } from 'redux';
import eventDataReducer from './eventData';
import eventListReducer from './eventList';

const rootReducer = combineReducers({
  allEvents: eventListReducer,
  eventData: eventDataReducer,
});

export default rootReducer;
