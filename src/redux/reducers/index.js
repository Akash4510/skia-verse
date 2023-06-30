import { combineReducers } from 'redux';
import eventDataReducer from './eventData';
import eventListReducer from './eventList';
import appReducer from './app';

const rootReducer = combineReducers({
  allEvents: eventListReducer,
  eventData: eventDataReducer,
  app: appReducer,
});

export default rootReducer;
