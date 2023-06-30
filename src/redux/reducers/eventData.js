const initialState = {
  isDetailedViewOpen: false,
  selectedEventId: null,
};

const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_DETAILED_VIEW':
      return {
        ...state,
        isDetailedViewOpen: true,
        selectedEventId: action.payload,
      };

    case 'CLOSE_DETAILED_VIEW':
      return { ...state, isDetailedViewOpen: false, selectedEventId: null };

    default:
      return state;
  }
};

export default eventDataReducer;
