const initialState = {
  title: '',
  description: '',
  img: '',
  bannerImg: '',
  mode: '',
  type: '',
  participationType: '',
  minMembers: '',
  maxMembers: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  judgingMode: '',
  location: '',
  isPrivate: false,
};

const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENT_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_EVENT_DATA':
      return initialState;
    default:
      return state;
  }
};

export default eventDataReducer;
