const initialState = {
  isFileUploadDialogOpen: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FILE_UPLOAD_DIALOG':
      return {
        ...state,
        isFileUploadDialogOpen: !state.isFileUploadDialogOpen,
      };
    default:
      return state;
  }
};

export default appReducer;
