const initialState = {
  items: [],
  item: {}
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      return {
        ...state,
        item: { ...state.item, ...action.payload }
      };
    case "ADD_COURSE":
      return {
        ...state,
        items: [...state.item, action.payload]
      };
    default:
      return state;
  }
};

export default course;
